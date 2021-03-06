import { Compiler ,Component, OnInit } from '@angular/core';
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

  //select ประเภทคลินิก
  public ClinicType: string = '';
  selectClinicTypeChangeHandler (event: any) {
    //update the ui
    this.ClinicType = event.target.value;
  }
  //select
//select เลือกอำเภอ
public District: string = ''; 
selectDistrictChangeHandler (event: any) {
    //update the ui
    this.District = event.target.value;
  }
   //select

//select เลือกปี
public Year: string = ''; 
selectYearChangeHandler (event: any) {
    //update the ui
    this.Year = event.target.value;
  }
   //select
    


  private ClinicName : string;  // เราป้อนค่า id = 5 ที่ตัวแปรนี้
  private  hostelDetail : any;

public Clinicnames:string;

private ResponseResult:ClsResponseAPI;


  constructor(private _compiler: Compiler,private ApiService:ApiService,private gDrive:GoogleDriveProvider,private router: Router,private DataService:DataService) { 

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
    
    this._compiler.clearCache();
    
  }
  
  model: any = {};



  onSubmit() {
    localStorage.setItem("Clinicname",this.model.Clinicname);
    localStorage.setItem("Customername",this.model.Customername);
    localStorage.setItem("Operatorname",this.model.Operatorname); 
    localStorage.setItem("ClinicType",this.ClinicType); 
    localStorage.setItem("District",this.District);  
    localStorage.setItem("Year",this.Year);  
    


    this.router.navigate(['/SearchSummary']);

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



