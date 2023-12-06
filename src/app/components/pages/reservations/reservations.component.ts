import { Component, OnInit } from '@angular/core';
import { Ticket } from 'src/app/models/ticket.model';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.scss']
})
export class ReservationsComponent implements OnInit {

  public tickets!: Ticket[];

  constructor(private cartService: CartService) { 
    this.cartService.getTickets().subscribe(tickets => {
      this.tickets = tickets;
    });

  }
  ngOnInit(): void {
  }

}
