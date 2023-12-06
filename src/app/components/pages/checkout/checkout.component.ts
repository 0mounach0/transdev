import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  IPayPalConfig,
  ICreateOrderRequest 
} from 'ngx-paypal';
import { PaymentType } from 'src/app/enums/payementType';
import { Reservation } from 'src/app/models/reservation.model';
import { Ticket } from 'src/app/models/ticket.model';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
    public paypalSelected: boolean = false;
  public payPalConfig ? : IPayPalConfig;

  public reservations!: Reservation[];
  public totalPrice: number = 0;

  constructor(private cartService: CartService, private router: Router) { 
    this.cartService.getReservations().subscribe(reservations => {
      this.reservations = reservations;
    });

    this.cartService.getTotalPrice().subscribe(totalP => {
      this.totalPrice = totalP;
    });
  }

    ngOnInit(): void {
        this.initConfig();
    }

    private initConfig(): void {
        this.payPalConfig = {
            currency: 'EUR',
            clientId: 'AQdefYgog_2Ou7puul2Pey1GED7KPqeDVNX0wfJOxtCp6V4-eNkMpCV5Pjf7vswBEOinEGLuKKVTIu0U',
            createOrderOnClient: (data) => < ICreateOrderRequest > {
                intent: 'CAPTURE',
                purchase_units: [{
                    amount: {
                        currency_code: 'EUR',
                        value: this.priceToString(),
                        breakdown: {
                            item_total: {
                                currency_code: 'EUR',
                                value: this.priceToString()
                            }
                        }
                    },
                    items: [{
                        name: 'Bus ticket - reservations',
                        quantity: '1',
                        category: 'DIGITAL_GOODS',
                        unit_amount: {
                            currency_code: 'EUR',
                            value: this.priceToString(),
                        },
                    }]
                }]
            },
            advanced: {
                commit: 'true'
            },
            style: {
                label: 'paypal',
                layout: 'horizontal'
            },
            onApprove: (data, actions) => {
                this.createTicket();
                console.log('onApprove - transaction was approved, but not authorized', data, actions);
                actions.order.get().then((details: any) => {
                    console.log('onApprove - you can get full order details inside onApprove: ', details);
                });

            },
            onClientAuthorization: (data) => {
                console.log('onClientAuthorization - you should probably inform your server about completed transaction at this point', data);
                //this.showSuccess = true;
            },
            onCancel: (data, actions) => {
                console.log('OnCancel', data, actions);
                //this.showCancel = true;

            },
            onError: err => {
                console.log('OnError', err);
                //this.showError = true;
            },
            onClick: (data, actions) => {
                console.log('onClick', data, actions);
                //this.resetStatus();
            }
        };
    }

    public selectPayementMethod(method: string) {
        this.paypalSelected = method == PaymentType.PayPal ? true: false;
        console.log(this.paypalSelected)
    }

    public createTicket() {
        const ticket: Ticket = {
            uuid: crypto.randomUUID(),
            reservations: this.reservations,
            payement: this.paypalSelected ? PaymentType.PayPal : PaymentType.Card,
            totalPrice: this.totalPrice
        }
        if(this.reservations.length > 0) {
            this.cartService.addTicket(ticket);
            this.cartService.clearCart();
            this.router.navigate(['/thank-you'])
        }
    }

    public priceToString(): string {
        return this.totalPrice.toFixed(2);
    }

}
