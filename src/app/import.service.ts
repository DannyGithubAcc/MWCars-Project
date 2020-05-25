import { Injectable, OnInit } from '@angular/core';
import { from, of, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map, filter, tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ImportService {
  url = '../assets/MwCarsContent.json';
  handleError: any;
  myJsonData$ = this.http.get(this.url).pipe(
    tap(home => console.log(home, ' HALLLOOOO3')),
    catchError(this.handleError)
    );

  constructor(private http: HttpClient) { }


    // getDataFromJson(id: string): Observable<any> {
    //  return this.http.get(this.url).pipe(
    //    tap(home => console.log(home.home, ' HALLLOOOO3'))
    //    );
    //  console.log(myJsonDataObs$);
    // }

}
