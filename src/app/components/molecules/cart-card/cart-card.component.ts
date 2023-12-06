import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Reservation } from 'src/app/models/reservation.model';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'cart-card',
  templateUrl: './cart-card.component.html',
  styleUrls: ['./cart-card.component.scss']
})
export class CartCardComponent implements OnInit {

  @Input() item!: Reservation;

  constructor(private _modalService: NgbModal, private cartService: CartService) { 
  }

  ngOnInit(): void {
  }

  removeReservation() {
    this.cartService.removeReservation(this.item);
  }

  editReservation() {
    this.cartService.editReservation(this.item);
  }

  clearCart() {
    this.cartService.clearCart();
  }

}
