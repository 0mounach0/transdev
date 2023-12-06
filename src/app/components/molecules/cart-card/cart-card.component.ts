import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Reservation } from 'src/app/models/reservation.model';
import { CartService } from 'src/app/services/cart/cart.service';
import { ConfirmModalComponent } from '../confirm-modal/confirm-modal.component';
import { EditModalComponent } from '../edit-modal/edit-modal.component';

@Component({
  selector: 'cart-card',
  templateUrl: './cart-card.component.html',
  styleUrls: ['./cart-card.component.scss']
})
export class CartCardComponent implements OnInit {

  @Input() item!: Reservation;
  @Input() hideButtons: boolean = false;

  constructor(private _modalService: NgbModal, private cartService: CartService) { 
  }

  ngOnInit(): void {
  }

  public confirmDelete() {
    const modalRef = this._modalService.open(ConfirmModalComponent, { centered: true });
    modalRef.componentInstance.item = this.item.line;
    modalRef.componentInstance.delete = true;
    
    modalRef.result.then(res => {
      if(res) {
        this.removeReservation();
      }
    })
  }

  public confirmEdit() {
    const modalRef = this._modalService.open(EditModalComponent, { centered: true });
    modalRef.componentInstance.item = this.item;
    
    modalRef.result.then(res => {
      if(res) {
        this.item = res;
        this.editReservation();
      }
    })
  }

  public removeReservation() {
    this.cartService.removeReservation(this.item);
  }

  editReservation() {
    this.cartService.editReservation(this.item);
  }

  clearCart() {
    this.cartService.clearCart();
  }

}
