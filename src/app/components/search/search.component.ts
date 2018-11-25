import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../services/api.service';
import {DataService} from '../../services/DataService';
import { SearchDetail } from './Search-Detail';
import { Router } from "@angular/router";

// import {AppChildSurvey} from '';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})


export class SearchComponent implements OnInit {
 
  message="test"

  // private searctServiceData:searctService[];


  private ClinicName : string;  // เราป้อนค่า id = 5 ที่ตัวแปรนี้
  private  hostelDetail : any;

public Clinicnames:string;

private ResponseResult:ClsResponseAPI;


  constructor(private ApiService:ApiService,private router: Router,private DataService:DataService) { }

  ngOnInit() {
    

    
  }
  
  model: any = {};



  onSubmit() {
    // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model))

    this.ApiService.getSearch(this.model.Clinicname).subscribe((Response) => {

      // this.ResponseResult = Response; 
      this.DataService.searchDetail = Response; 
      setTimeout(() => {
     localStorage.setItem("Latitude",this.DataService.searchDetail.Latitude);
     localStorage.setItem("Longitude",this.DataService.searchDetail.Longitude);
    }, 5000);

    })


    
  
      this.router.navigate(['/Survey']);
    

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



