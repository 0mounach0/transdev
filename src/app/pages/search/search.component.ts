import { Component, OnInit } from '@angular/core';
import { Line } from 'src/app/models/line.model';
import { DataService } from 'src/app/services/data/data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  public currentPage = 1;
  public pageSize = 12;
  public totalPages!: number;
  public pageData!: Line[];
  public jsonData!: Line[];
  public filteredData!: Line[];
  public searchQuery: string = '';

  constructor( private dataService: DataService) {
  }

  public ngOnInit(): void {
    this.dataService.parseJSON().subscribe({
      next: (jsonData) => {
        this.jsonData = jsonData;
        
        this.totalPages = Math.ceil(jsonData.length / this.pageSize); 
        this.filterData();
      },
      error: (error) => {
        console.error('Error parsing Json file:', error);
      },
    });
  }

  public filterData(): void {
    if(!this.searchQuery) {
      this.filteredData = this.jsonData;
    }else {
      this.filteredData = this.jsonData.filter(item =>
        this.getLineSeachInfos(item).includes(this.searchQuery.toLowerCase())
      );

      console.log(this.filteredData)
    }
    
    this.totalPages = Math.ceil(this.filteredData.length / this.pageSize);
    this.navigateToPage(1, this.filteredData);
    if(this.totalPages === 0) {
      this.pageData = [];
    }
  }

  public getLineSeachInfos(line: Line): string {
    const str = line.busNum + " | " + line.startCity + " - " + line.startStation + " | " + line.endCity + line.endStation; 
    console.log(str);
    return str.toLowerCase();
  }

  public getPageData(pageNumber: number, data: Line[]): void {
    const startIndex = (pageNumber - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.pageData = data.slice(startIndex, endIndex);
  }

  public navigateToPage(pageNumber: number, data: Line[]): void {
    if (pageNumber >= 1 && pageNumber <= this.totalPages) {
      this.currentPage = pageNumber;
      this.getPageData(this.currentPage, data);
    }
  }

  public navigateToPreviousPage(): void {
    if (this.currentPage > 1) {
      this.navigateToPage(this.currentPage - 1, this.filteredData);
    }
  }

  public navigateToNextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.navigateToPage(this.currentPage + 1, this.filteredData);
    }
  }

  public getPaginationNumbers(): number[] {
    const start = Math.max(1, this.currentPage - 2);
    const end = Math.min(this.totalPages, start + 4);
    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  }

  public bindSearchQuery(sQuery: string): void {
    this.searchQuery = sQuery;
    this.filterData();
  }

}
