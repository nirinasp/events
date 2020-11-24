import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';

import { Event } from '../models/event';
import { Speaker } from '../models/speaker';
import { Endpoints } from '../enums/endpoints';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl: string;

  constructor(private http: HttpClient) { 
    this.baseUrl = Endpoints.root;
  }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  handleError(response: HttpErrorResponse): Observable<any> {
    if (response.error instanceof ErrorEvent) {
      console.log(response.error.message);
    } else {
      console.log(response.status);
    }

    return throwError('Unexpected error');
  }

  getEvent(id: number): Observable<Event> {
    let url: string = this.baseUrl + Endpoints.events + '/' + id;
    return this.http.get<Event>(url);
  }

  getEvents(): Observable<Event> {
    let url: string = this.baseUrl + Endpoints.events;
    return this.http.get<Event>(url);
  }

  getSpeakers(): Observable<Speaker> {
    let url: string = this.baseUrl + Endpoints.speakers;
    return this.http.get<Speaker>(url);
  }
}