import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'search-molec',
  templateUrl: './search-molec.component.html',
  styleUrls: ['./search-molec.component.scss']
})
export class SearchMolecComponent implements OnInit {

  @Output() $searchQuery: EventEmitter<string>;
  public searchQuery = '';

  constructor() { 
    this.$searchQuery = new EventEmitter();
  }

  ngOnInit(): void {
  }

}
