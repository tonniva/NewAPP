import { Component, OnInit } from '@angular/core';
import {ApiService,GoogleDriveProvider} from '../../services/api.service';
import {DataService} from '../../services/DataService';
import { SearchDetail } from './Search-Detail';
import { Router } from "@angular/router";

// import {AppChildSurvey} from '';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [ GoogleDriveProvider ]
})


export class SearchComponent implements OnInit {
  persons: Array<any>;
   dataId: string;
  message="test"

  private searchedItems: Array<any> = [];
  private key: string;
  private prop: string;
  private childrenPropName: string;

  // private searctServiceData:searctService[];


  private ClinicName : string;  // เราป้อนค่า id = 5 ที่ตัวแปรนี้
  private  hostelDetail : any;

public Clinicnames:string;

private ResponseResult:ClsResponseAPI;


  constructor(private ApiService:ApiService,private gDrive:GoogleDriveProvider,private router: Router,private DataService:DataService) { 

    this.dataId = '1-sN8-XQ1tY6w-3BhaoC5G8fsMmcCq9vxGZpWINKBnxI';
    gDrive.load( this.dataId )
      .then( ( data ) => {
        console.log( data );
        this.persons = data;
      }, (error) => {
        console.log( error );
      });
  }

  ngOnInit() {
    

    
  }
  
  model: any = {};



  onSubmit() {
    localStorage.setItem("Clinicname",this.model.Clinicname);
    localStorage.setItem("Customername",this.model.Customername);
    localStorage.setItem("Operatorname",this.model.Operatorname);
    localStorage.setItem("Address",this.model.address);
    
    // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model))

    // this.ApiService.getSearch(this.model.Clinicname).subscribe((Response) => {
 
    //   this.DataService.searchDetail = Response; 
    //   setTimeout(() => {
    //  localStorage.setItem("Latitude",this.DataService.searchDetail.Latitude);
    //  localStorage.setItem("Longitude",this.DataService.searchDetail.Longitude);

    // }, 1000);

    // }) 
  
    // this.searchRecursive(this.model.Clinicname);
    this.router.navigate(['/Survey']);

  }
  
  searchRecursive(value) { 
    for(var i = 0; i < this.persons.length; i++) { 
      if(value == this.persons[i].clinicname) {
        this.searchedItems.push(this.persons[i]);
      } 
    } 
  }

  
      
}




interface ClsResponseAPI {
  Id: string;
  Clinicname: string;
  Customername: string;
  Operatorname: string;
  Address: string;
  Status: string;
  Image: string;
  Latitude: string;
  Longitude: string;
}



