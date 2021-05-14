import 'rxjs/add/operator/map';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  result: any;
  baseUrl = 'https://api.currentsapi.services/v1';


  constructor(private http: HttpClient)  { }

  getLatestNews(): Observable<any>{
    return this.http.get(`${this.baseUrl}/latest-news`);
  }
}

