import { Component, OnInit } from '@angular/core';
import {Injectable} from '@angular/core';
import { ApiService } from './services/api.service';
import { LocationService } from './services/location.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  constructor(private api: ApiService, private locationService: LocationService) {}
  
  title = 'pointinside';
  data: any;
  timeZoneAbbreviation: string;
  timeZoneName: string;
  timeZoneCountry: string;
  lattitude:string;
  longitude:string;
  visible = false;
  
  ngOnInit(){
    this.getLocation();
  }

  getData(){
    this.api.getTimeZoneData(this.lattitude,this.longitude)
    .subscribe(data => {
      this.data = data;
      this.timeZoneAbbreviation = this.data.abbreviation;
      this.timeZoneName = this.data.zoneName;
      this.timeZoneCountry = this.data.countryName;
      this.showOutput();
    });
  }

  getLocation(){
    this.locationService.getPosition().then(pos=>{
      this.lattitude = pos.lat;
      this.longitude = pos.lng;
    });
  }

  showOutput(){
    this.visible = true;
  }
}
