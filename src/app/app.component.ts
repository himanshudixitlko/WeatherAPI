
import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpModule, JsonpModule } from '@angular/http';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
})
export class AppComponent  { 
   constructor(private http: Http) { }

  selectedCity: any; 
  result :any;
  result1: any;
  position:any;
  position1:any;
  position2:any;
  time:any;
  condition:any;
  temperature:any;
  pressure:any;
  humidity:any;


onClick(event:any) {
    //this.time= new Date();
    var idAttr = event.srcElement.attributes.id;
    this.selectedCity = idAttr.nodeValue;
    //console.log(this.selectedCity);
    

    this.http.get('http://api.openweathermap.org/data/2.5/weather?q='+this.selectedCity+'&APPID=2b3d2606d96d4c60fc613f9cfbfabda2').map((res:Response) => res.json())
      .subscribe(
        data => { this.result = data, this.position1 = this.result.coord.lat, this.position2 = this.result.coord.lon,this.position = "Lat: "+this.position1+' , Lon: '+this.position2, this.condition = this.result.weather[0].main, this.temperature = this.result.main.temp+" F", this.pressure = this.result.main.pressure+ " hPa", this.humidity = this.result.main.humidity+ " %"},
        err => console.error(err),
        () => console.log(this.pressure)
        
        
      );

      this.http.get('http://api.timezonedb.com/v2/get-time-zone?key=23PEO44NWZ0N&format=json&by=zone&zone=australia/'+this.selectedCity).map((res:Response) => res.json())
      .subscribe(
        data => { this.result1 = data, this.time=this.result1.formatted},
        err => console.error(err),
        () => console.log(this.result1)
        
        
      );
      //console.log(this.result.coord);
// this.position=this.result.coord;
// console.log(this.position);
    
  }

 }
