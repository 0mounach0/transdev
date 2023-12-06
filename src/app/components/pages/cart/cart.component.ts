import { Component, OnInit } from '@angular/core';
import { Reservation } from 'src/app/models/reservation.model';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  public reservations!: Reservation[];

  constructor(private cartService: CartService) { 
    this.cartService.getReservations().subscribe(reservations => {
      this.reservations = reservations;
    });
  }
  ngOnInit(): void {
  }

}
