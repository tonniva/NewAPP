import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-googlemap',
  templateUrl: './googlemap.component.html',
  styleUrls: ['./googlemap.component.css']
})
export class GooglemapComponent implements OnInit {
  public geolocationPosition;
  title: string = 'สถานคลินิคที่ตรวจ';
  
  lat: number =0;
  lng: number = 0; 
  constructor() { }



 
  ngOnInit() {


    setTimeout(() => { 
    if (window.navigator && window.navigator.geolocation) {
        window.navigator.geolocation.getCurrentPosition(
            position => {
                this.geolocationPosition = position,
  
                     console.log(position)
                    // this.lat = position.coords.latitude
                    // this.lng = position.coords.longitude
              
                    var Latitude = localStorage.getItem("Latitude");
                    var Longitude = localStorage.getItem("Longitude");

                    console.log("Latitude:"+Latitude +"Longitude:"+Longitude)
                    this.lat = Number(Latitude)
                    this.lng = Number(Longitude)
            },
            error => {
                switch (error.code) {
                    case 1:
                        console.log('Permission Denied');
                        break;
                    case 2:
                        console.log('Position Unavailable');
                        break;
                    case 3:
                        console.log('Timeout');
                        break;
                }
            }
        );
    };
  
}, 10000);
    
  }
  getLocation(){

    if (window.navigator && window.navigator.geolocation) {
      window.navigator.geolocation.getCurrentPosition(
          position => {
              this.geolocationPosition = position,
            
                  console.log(position)
                  this.lat = position.coords.latitude
                  this.lng = position.coords.longitude

          },
          error => {
              switch (error.code) {
                  case 1:
                      console.log('Permission Denied');
                      break;
                  case 2:
                      console.log('Position Unavailable');
                      break;
                  case 3:
                      console.log('Timeout');
                      break;
              }
          }
      );
  };


  }
  

}
