import { Component, OnInit, Input } from '@angular/core';
import { Line } from 'src/app/models/line.model';

@Component({
  selector: 'results-org',
  templateUrl: './results-org.component.html',
  styleUrls: ['./results-org.component.scss']
})
export class ResultsOrgComponent implements OnInit {

  _pageData: Line[] = [];
  get pageData(): Line[] {
      return this._pageData;
  }
  @Input() set pageData(value: Line[]) {
      this._pageData = value;
  }

  constructor() { }

  ngOnInit(): void {
    console.log(this.pageData)
  }

}
