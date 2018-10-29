import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})


export class UserComponent implements OnInit {

  title: string = 'จุดตรวจ สถานคลินิค';

  lat: number =0;
  lng: number = 0; 

  public geolocationPosition;

 private name:string;

 private lastName:string;

 private address:{
   province:string;
   street:string;
   city:string;
   poscode:string;
   phone:string;
 }

 public skills:string[];

  constructor() {


   }

  ngOnInit() {
    this.name ="Nopphadon";
    this.lastName ="Saengaroon";
    this.address={
      province:"Tak",
      street:"Tak Sin Road",
      city :"Tak",
      poscode :"63000",
      phone:"086-4147900",
    }
    

    this.skills=["Football","Running","swimming"];


  }

  addSkill(skill){
    this.skills.unshift(skill);
  return false;
  }

  removeSkill(skill){

    this.skills.forEach((element,index)=> {
      if (element == skill) {
        this.skills.splice(index,1);  
      }
    });

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
