import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  constructor() { }
  model: any = {};
  ngOnInit() {
        
    if (window.navigator && window.navigator.geolocation) {
      window.navigator.geolocation.getCurrentPosition(
          position => {
              // this.geolocationPosition = position,

                 
                  this.model.Longitude = position.coords.latitude,
                  this.model.Latitude = position.coords.longitude,
                  console.log(position)
                  // this.lat = 14.598382
                  // this.lng = 100.447521
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

  onSubmit() {

    setTimeout(() => {
      //  alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model))
      $.ajax({
        type: "POST",
        dataType: 'json',
        url: 'https://apissj-api.azurewebsites.net/books',
        data: this.model,
        success: function(data) { alert('data: ' + data); }
      });
    }, 3000);



  }
}
