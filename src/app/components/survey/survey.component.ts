import { Component, OnInit,Input, } from '@angular/core';
import {DataService} from '../../services/DataService';
import * as $ from 'jquery';
@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent implements OnInit {
@Input() message : string ;


public ResultSearch:ClsResponseAPI;
 
  constructor(private DataService:DataService) { }

  ngOnInit() {
    let goodResponse = [];
  //   $(document).ready(function(){

      
  // });


    setTimeout(() => {

  

      this.ResultSearch =  this.DataService.searchDetail;
      //  console.log(goodResponse);

    }, 5000);
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

