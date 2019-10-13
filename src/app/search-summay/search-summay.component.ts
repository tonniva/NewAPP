import {Compiler, Component, OnInit,Input, } from '@angular/core';
import {DataService} from '../services/DataService';
import {ApiService,GoogleDriveProvider} from '../services/api.service';
import { Router } from "@angular/router";
import { CookieService } from 'ngx-cookie-service';
import * as $ from 'jquery';
@Component({
  selector: 'app-search-summay',
  templateUrl: './search-summay.component.html',
  styleUrls: ['./search-summay.component.css'],
  providers: [ GoogleDriveProvider,CookieService ]
})
export class SearchSummayComponent implements OnInit {
  @Input() message : string ;
  private Clinicname = localStorage.getItem("Clinicname");
  private Customername = localStorage.getItem("Customername");
  private Operatorname = localStorage.getItem("Operatorname");
  private ClinicType = localStorage.getItem("ClinicType");
  private District = localStorage.getItem("District");
  private Year = localStorage.getItem("Year"); 

  persons: Array<any>;
  dataId: string;
  public searchedItems: Array<any> = [];
    constructor(private _compiler: Compiler,private DataService:DataService,gDrive:GoogleDriveProvider,private router: Router,private cookieService: CookieService) { 
  
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
        var str = this.persons[i].firstname+this.persons[i].firstnamelastname;
            if (str.search(re) == -1 ) { 
              console.log("Does not contain customername "+re ); 
            } else { 
              this.searchedItems.push(this.persons[i]);
            }   
      } 
    }


    fsearchSummay() {
      console.log(this.persons)
      for(var i = 0; i < this.persons.length; i++) {
         
        var str_clinictype = this.persons[i].clinictype;
        var str_district = this.persons[i].district;
        var str_year = this.persons[i].year;

            if (str_clinictype.search(this.ClinicType) == 0  && str_district.search(this.District) == 0 && str_year.search(this.Year) == 0) { 
              
              this.searchedItems.push(this.persons[i]);
            } else { 
              console.log("Does not contain ClinicType &&  District && Year" ); 
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
     

    goto(item){
      this.cookieService.set('storedata_survey',JSON.stringify(item));  
      this.router.navigate(['/Survey']);
      this.DataService.searchDetail = item; 

    }

  ngOnInit() {
    this._compiler.clearCache();
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


      if(this.Clinicname == 'undefined' && this.Customername == 'undefined' && this.Operatorname == 'undefined')  
        this.fsearchSummay()     
      
    }, 1000);
  }

    
 
}
