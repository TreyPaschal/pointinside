import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})

export class ApiService {

  constructor(private http: HttpClient) { }

  getTimeZoneData(lat,lng) {
    return this.http.get(`http://api.timezonedb.com/v2.1/get-time-zone?key=2BZEGQZMO508&format=json&by=position&lat=${lat}&lng=${lng}`);
  }

}