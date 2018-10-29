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
    })


    //  this.DataService.searchDetail = this.model; 
  
      this.router.navigate(['/Survey']);
    
    // this.router.navigate(['/Survey']);
  }
  
  // get currentBook() { return JSON.stringify(this.model); }

  // onSubmit(){
  //  console.log(this);
  //  this.router.navigate(['/Survey']);
  // }
  

  // btnClick= function () {
  //   this.router.navigate(['/Survey']);
  //     }

      
}

// interface ClsResponseAPI {
//   Clinicname: string;
//   Customername: string;
//   Operatorname: string;
//   Address: string;
// }


// interface ClsResponseAPI {
//   userId: number;
//   id: number;
//   title: string;
//   body: string;
// }



interface ClsResponseAPI {
  Id: string;
  Clinicname: string;
  Customername: string;
  Operatorname: string;
  Address: string;
  Status: string;
  Image: string;
}





// interface Datum {
//   id: number;
//   first_name: string;
//   last_name: string;
//   avatar: string;
// }

// interface ClsResponseAPI {
//   page: number;
//   per_page: number;
//   total: number;
//   total_pages: number;
//   data: Datum[];
// }
