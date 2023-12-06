import { Component, OnInit } from '@angular/core';
import { Reservation } from 'src/app/models/reservation.model';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent implements OnInit {
  public isNavbarCollapsed: boolean = true;
  public reservations!: Reservation[];

  constructor(private cartService: CartService) { 
    this.cartService.getReservations().subscribe(reservations => {
      this.reservations = reservations;
    });
  }

  ngOnInit(): void {
  }

}
