import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Reservation } from 'src/app/models/reservation.model';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

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
  }

  goToCheckout() {
    if (this.reservations && this.reservations.every(reservation => reservation.client.fullName.length > 0 && reservation.client.email.length > 0)) {
      this.router.navigate(['/checkout'])
    } else {
      alert("Veuillez fournir les informations client pour toutes les réservations avant de procéder au paiement.");
    }
  }

}
