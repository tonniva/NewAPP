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


    
    if (window.navigator && window.navigator.geolocation) {
        window.navigator.geolocation.getCurrentPosition(
            position => {
                this.geolocationPosition = position,
  
                    console.log(position)
                    // this.lat = position.coords.latitude
                    // this.lng = position.coords.longitude

                    this.lat = 14.598382
                    this.lng = 100.447521
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
