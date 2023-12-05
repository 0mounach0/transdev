import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss']
})
export class BadgeComponent implements OnInit {

  @Input() textColor: string = "white"; 
  @Input() bgColor: string = "red"; 
  @Input() label: string = "10"; 

  constructor() { }

  ngOnInit(): void {
  }

}
