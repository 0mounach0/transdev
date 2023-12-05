import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'search-org',
  templateUrl: './search-org.component.html',
  styleUrls: ['./search-org.component.scss']
})
export class SearchOrgComponent implements OnInit {

  @Output() $searchQuery: EventEmitter<string>;

  constructor() {
    this.$searchQuery = new EventEmitter();
   }

  ngOnInit(): void {
  }

}
