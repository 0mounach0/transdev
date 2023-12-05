import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public data!: any[];

  constructor(private httpClient: HttpClient) {
  }

  public parseJSON(): Observable<any> {
    let filePath: string = 'assets/data/data.json';
    return new Observable(observer => {
      this.httpClient.get(filePath).subscribe({
        next: (jsonData: any) => {
          observer.next(jsonData);
          observer.complete();
        },
        error: (error: any) => {
          observer.error(error);
        }
      });
    });
  }

  public getPageData(pageNumber: number, pageSize: number): Observable<any[]> {
    const startIndex = (pageNumber - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const pageData = this.data?.slice(startIndex, endIndex);
    return of(pageData);
  }
}
