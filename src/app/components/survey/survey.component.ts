import { Component, OnInit,Input, } from '@angular/core';
import {DataService} from '../../services/DataService';
import {ApiService,GoogleDriveProvider} from '../../services/api.service';  
import { CookieService } from 'ngx-cookie-service';
import * as $ from 'jquery';
@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css'],
 

  providers: [ GoogleDriveProvider, CookieService ]
})
export class SurveyComponent implements OnInit {
@Input() message : string ;
private searchedItems: Array<any> = [];
private searcheDetail: Array<any> = [];

private Clinicname = localStorage.getItem("Clinicname");
private Customername = localStorage.getItem("Customername");
private Operatorname = localStorage.getItem("Operatorname");
private Address = localStorage.getItem("Address"); 

private ClinicType = localStorage.getItem("ClinicType");
private District = localStorage.getItem("District");
private Year = localStorage.getItem("Year"); 
 



public ResultSearch:ClsResponseAPI;
 
persons: Array<any>;
dataId: string;
  constructor(private DataService:DataService,gDrive:GoogleDriveProvider,private cookieService: CookieService) { 

    // knowledge http://leifwells.com/2016/06/09/ionic-2--angular-2-using-a-google-spreadsheet-as-a-data-source/
    // https://medium.com/@scottcents/how-to-convert-google-sheets-to-json-in-just-3-steps-228fe2c24e6
    // ภาษาไทย https://sysadmin.psu.ac.th/2014/10/10/googleappsscript-googlesheets-database/
    //insert delete update html to sheet //https://www.youtube.com/watch?v=OqDo2L-aSGw
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
 
    for(var i = 0; i < this.persons.length; i++) { 
    var re = value; 
    var str = this.persons[i].clinicname;
        if (str.search(re) == -1 ) { 
          console.log("Does not contain clinicname "+re ); 
        } else { 
          this.searchedItems.push(this.persons[i]);
        }  
    } 
  }
   
  fCustomername(value) {
    console.log(value)
    for(var i = 0; i < this.persons.length; i++) {
      var re = value; 
      var str = this.persons[i].customername;
          if (str.search(re) == -1 ) { 
            console.log("Does not contain customername "+re ); 
          } else { 
            this.searchedItems.push(this.persons[i]);
          }   
    } 
  }
  fOperatorname(value) {
    console.log(value)
    for(var i = 0; i < this.persons.length; i++) {

      var re = value; 
      var str = this.persons[i].operatorname;
          if (str.search(re) == -1 ) { 
            console.log("Does not contain operatorname "+re ); 
          } else { 
            this.searchedItems.push(this.persons[i]);
          }   
 
    } 
  }

   
  fAddress(value) {
    console.log(value)
    for(var i = 0; i < this.persons.length; i++) {

      var re = value; 
      var str = this.persons[i].address;
          if (str.search(re) == -1 ) { 
            console.log("Does not contain  address"+re ); 
          } else { 
            this.searchedItems.push(this.persons[i]);
          }   
    } 
  }

   
  
  ngOnInit() {
 
    if(this.DataService.searchDetail)
    { 
      console.log("111111");
      
      this.searchedItems.push(this.DataService.searchDetail); 
    }
    else {
      var survey_store_cookie =  this.cookieService.get('storedata_survey');
      this.DataService.searchDetail =  JSON.parse(survey_store_cookie);;
       
      this.searchedItems.push(this.DataService.searchDetail); 
  
    }

    let goodResponse = [];
  //   $(document).ready(function(){

      
  // });


    setTimeout(() => { 
     
      if(this.Clinicname != 'undefined')  
      {
        this.fsearchRecursive(this.Clinicname)   
      }   
      
      if(this.Customername != 'undefined')  
      {
        this.fCustomername(this.Customername) 
      }   
      if(this.Operatorname != 'undefined')  
      { 
      this.fOperatorname(this.Operatorname) 
      }

      if(this.Address != 'undefined')  
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

 