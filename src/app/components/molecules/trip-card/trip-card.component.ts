import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Line } from 'src/app/models/line.model';
import { ConfirmModalComponent } from '../confirm-modal/confirm-modal.component';
import { Reservation } from 'src/app/models/reservation.model';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'trip-card',
  templateUrl: './trip-card.component.html',
  styleUrls: ['./trip-card.component.scss']
})
export class TripCardComponent implements OnInit {

  @Input() item!: Line;

  constructor(private _modalService: NgbModal, private cartService: CartService) { 
  }

  ngOnInit(): void {
  }

  confirmAddToCart() {
    const modalRef = this._modalService.open(ConfirmModalComponent, { centered: true });
    modalRef.componentInstance.item = this.item;
    
    modalRef.result.then(res => {
      if(res) {
        const reservation: Reservation = {
          uuid: crypto.randomUUID(),
          client: { email: "", fullName: "", uuid: crypto.randomUUID() },
          line: this.item
        };

        this.cartService.addReservation(reservation);
        
      }
    })
  }
}