import { Component, OnInit,Input, } from '@angular/core';
import {DataService} from '../../services/DataService';
import {ApiService,GoogleDriveProvider} from '../../services/api.service';
import * as $ from 'jquery';
@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css'],
  providers: [ GoogleDriveProvider ]
})
export class SurveyComponent implements OnInit {
@Input() message : string ;
private searchedItems: Array<any> = [];

private Clinicname = localStorage.getItem("Clinicname");
private Customername = localStorage.getItem("Customername");
private Operatorname = localStorage.getItem("Operatorname");
private Address = localStorage.getItem("Address"); 

public ResultSearch:ClsResponseAPI;
 
persons: Array<any>;
dataId: string;
  constructor(private DataService:DataService,gDrive:GoogleDriveProvider) { 

    // knowledge http://leifwells.com/2016/06/09/ionic-2--angular-2-using-a-google-spreadsheet-as-a-data-source/
    // https://medium.com/@scottcents/how-to-convert-google-sheets-to-json-in-just-3-steps-228fe2c24e6
    this.dataId = '1-sN8-XQ1tY6w-3BhaoC5G8fsMmcCq9vxGZpWINKBnxI';
    gDrive.load( this.dataId )
      .then( ( data ) => {
        console.log( data );
        this.persons = data;
      }, (error) => {
        console.log( error );
      });
  }

  
  fsearchRecursive(value) {
    console.log(value)
    for(var i = 0; i < this.persons.length; i++) {
      console.log(value) 
      if(value == this.persons[i].clinicname) {
        this.searchedItems.push(this.persons[i]);
      } 
    } 
  }
   
  fCustomername(value) {
    console.log(value)
    for(var i = 0; i < this.persons.length; i++) {
      console.log(value) 
      if(value == this.persons[i].customername) {
        this.searchedItems.push(this.persons[i]);
      } 
    } 
  }
  fOperatorname(value) {
    console.log(value)
    for(var i = 0; i < this.persons.length; i++) {
      console.log(value) 
      if(value == this.persons[i].operatorname) {
        this.searchedItems.push(this.persons[i]);
      } 
    } 
  }

   
  fAddress(value) {
    console.log(value)
    for(var i = 0; i < this.persons.length; i++) {
      console.log(value) 
      if(value == this.persons[i].address) {
        this.searchedItems.push(this.persons[i]);
      } 
    } 
  }

   
  
  ngOnInit() {
    
    let goodResponse = [];
  //   $(document).ready(function(){

      
  // });


    setTimeout(() => {

      this.fsearchRecursive(this.Clinicname)   
      if(this.Clinicname )  
      {
        this.fCustomername(this.Customername) 
      }   
      if(this.Customername)  
      { 
      this.fOperatorname(this.Operatorname) 
      }

      if(!this.Operatorname)  
      {
      this.fAddress(this.Address) 
      }

      // this.ResultSearch =  this.DataService.searchDetail;
      //  console.log(goodResponse);

    }, 1000);
    
  }


}


interface ClsResponseAPI {
  Id: string;
  Clinicname: string;
  Customername: string;
  Operatorname: string;
  Address: string;
  Status: string;
  ImageUrl: string;
  Image: string;
}

 