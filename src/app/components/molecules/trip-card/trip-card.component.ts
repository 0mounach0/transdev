import { Component, OnInit, Input } from '@angular/core';
import { Line } from 'src/app/models/line.model';

@Component({
  selector: 'trip-card',
  templateUrl: './trip-card.component.html',
  styleUrls: ['./trip-card.component.scss']
})
export class TripCardComponent implements OnInit {

  @Input() item!: Line;

  constructor() { 
  }

  ngOnInit(): void {
  }

}
