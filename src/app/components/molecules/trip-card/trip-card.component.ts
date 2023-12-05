import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Line } from 'src/app/models/line.model';
import { ConfirmModalComponent } from '../confirm-modal/confirm-modal.component';

@Component({
  selector: 'trip-card',
  templateUrl: './trip-card.component.html',
  styleUrls: ['./trip-card.component.scss']
})
export class TripCardComponent implements OnInit {

  @Input() item!: Line;

  constructor(private _modalService: NgbModal) { 
  }

  ngOnInit(): void {
  }

  confirmAddToCart() {
    const modalRef = this._modalService.open(ConfirmModalComponent);
    modalRef.componentInstance.item = this.item;
    modalRef.result.then(res => {
      if(res) {
        console.log("add to cart !!")
      }
    })
  }

}
