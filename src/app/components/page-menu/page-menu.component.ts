import { Component, OnInit } from '@angular/core';  
import * as $ from 'jquery';
@Component({
  selector: 'app-page-menu',
  templateUrl: './page-menu.component.html',
  styleUrls: ['./page-menu.component.css']
})
export class PageMenuComponent implements OnInit {

  constructor() { }
  model: any = {};
  public IP : string;  // 
   
  ngOnInit() {
    
    $.getJSON('http://gd.geobytes.com/GetCityDetails?callback=?', function(data) {
      // console.log(JSON.stringify(data.geobytesremoteip, null, 2));
       this.IP = JSON.stringify(data.geobytesremoteip, null, 2);
       console.log(this.IP);
      
    }); 
  
  }

  navbarOpen = false; 

  toggleNavbar() { 
    this.navbarOpen = !this.navbarOpen;
  }

}
