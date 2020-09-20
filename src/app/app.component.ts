import { Component } from '@angular/core';
import { Location } from '@angular/common';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public firebases=null;
  title = 'my-app';
  constructor( private location: Location ) { 
  }
  
  goBack() {
    // window.history.back();
    this.location.back();  
  }
}


