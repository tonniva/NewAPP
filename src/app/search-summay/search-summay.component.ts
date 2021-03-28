import {Compiler, Component, OnInit,Input, } from '@angular/core';
import {DataService} from '../services/DataService';
import {ApiService,GoogleDriveProvider} from '../services/api.service';
import { Router } from "@angular/router";
import { CookieService } from 'ngx-cookie-service';
import * as $ from 'jquery';
import * as _ from "lodash";
import { LoadingScreenService } from "../services/loading-screen/loading-screen.service";
@Component({
  selector: 'app-search-summay',
  templateUrl: './search-summay.component.html',
  styleUrls: ['./search-summay.component.css'],
  providers: [ GoogleDriveProvider,CookieService ]
})
export class SearchSummayComponent implements OnInit {
  @Input() message : string ;
  private Clinicname = localStorage.getItem("Clinicname")||"";
  private Customername = localStorage.getItem("Customername")||"";
  private Operatorname = localStorage.getItem("Operatorname")||"";
  private ClinicType = localStorage.getItem("ClinicType")||"";
  private District = localStorage.getItem("District")||"";
  private Year = localStorage.getItem("Year")||"";
  public qr:any=window.location.search;

  persons: Array<any>;
  dataId: string;
  datatype: string;
  public searchedItems: Array<any> = [];
    constructor(private _compiler: Compiler,private DataService:DataService,gDrive:GoogleDriveProvider,private router: Router,private cookieService: CookieService,private loadingScreenService:LoadingScreenService) {

      // knowledge http://leifwells.com/2016/06/09/ionic-2--angular-2-using-a-google-spreadsheet-as-a-data-source/
      // https://medium.com/@scottcents/how-to-convert-google-sheets-to-json-in-just-3-steps-228fe2c24e6
      // ภาษาไทย https://sysadmin.psu.ac.th/2014/10/10/googleappsscript-googlesheets-database/
      //insert delete update html to sheet //https://www.youtube.com/watch?v=OqDo2L-aSGw

      this.dataId = this.getParameterByName("key")//
      this.datatype = this.getParameterByName("t")//
      //this.dataId = '1-sN8-XQ1tY6w-3BhaoC5G8fsMmcCq9vxGZpWINKBnxI';//อ่างทอง
      gDrive.load(this.dataId)
        .then( ( data ) => {
          console.log( data );
          this.persons = data;
          setTimeout(()=>{

            this.loadingScreenService.stopLoading();

          }, 2000);
        }, (error) => {

          console.log( error );
        });
    }

    getParameterByName(name) {
      name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
      var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
          results = regex.exec(location.search);
      return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
  };

    fsearchRecursive(value) {

      for(var i = 0; i < this.persons.length; i++) {
      var re = value.trim();
      var str = this.persons[i].clinicname;
          if (!_.isEmpty(str) && str.search(re) == -1 ) {
            console.log("Does not contain clinicname "+re );
          } else {
            this.searchedItems.push(this.persons[i]);
          }
      }
    }

    fCustomername(value) {
      console.log(value)
      for(var i = 0; i < this.persons.length; i++) {
        var re = value.trim();
        var str = this.persons[i].firstname+" "+this.persons[i].lastname;
            if (!_.isEmpty(str) && str.search(re) == -1 ) {
              console.log("Does not contain customername "+re );
            } else {
              this.searchedItems.push(this.persons[i]);
            }
      }
    }


    fsearchSummay() {
      console.log(this.persons)
      for(var i = 0; i < this.persons.length; i++) {

        var str_clinictype = !_.isEmpty(this.persons[i].clinictype)?this.persons[i].clinictype:"";
        var str_district = !_.isEmpty(this.persons[i].district)?this.persons[i].district:"";
        var str_year = !_.isEmpty(this.persons[i].year)?this.persons[i].year:"";

if(this.Year != ""){



            if ((this.ClinicType != "" && this.District == "" && str_year == this.Year)) {
              if ((str_clinictype == this.ClinicType) ) {

                this.searchedItems.push(this.persons[i]);
              }
            }
            else if ((this.ClinicType == "" && this.District != "" && str_year == this.Year)) {
              if (str_district == this.District) {

                this.searchedItems.push(this.persons[i]);
              }
            }
            else if ((this.ClinicType == "" && this.District == "" && str_year == this.Year)) {

                this.searchedItems.push(this.persons[i]);

            }
            else if ((this.ClinicType != "" && this.District != "" && str_year == this.Year)) {
              if ( str_clinictype == this.ClinicType && str_district == this.District){
                this.searchedItems.push(this.persons[i]);
              }
             }
          }
          else{

            if ((this.ClinicType != "" && this.District == "")) {
              if ((str_clinictype == this.ClinicType) ) {

                this.searchedItems.push(this.persons[i]);
              }
            }
            else if ((this.ClinicType == "" && this.District != "")) {
              if (str_district == this.District) {

                this.searchedItems.push(this.persons[i]);
              }
            }
            else{
              this.searchedItems.push(this.persons[i]);
            }
          }
            // }
            // else if ((this.ClinicType != "" && this.District != "" && this.Year != "")) {
            //   if ((str_clinictype == this.ClinicType) && this.District.search(this.District) == 0 && str_year.search(this.Year) == 0) {

            //     this.searchedItems.push(this.persons[i]);
            //   }
            // }
            // else if ((this.ClinicType == "" && this.District != "" && this.Year != "")) {
            //   if (str_district.search(this.District) == 0 && str_year.search(this.Year) == 0) {

            //     this.searchedItems.push(this.persons[i]);
            //   }
            // }
            // else if ((this.ClinicType == "" && this.District != "" && this.Year == "")) {
            //   if (str_district == this.District) {

            //     this.searchedItems.push(this.persons[i]);
            //   }
            // }
            // else if ((this.ClinicType == "" && this.District == "" && str_year != "")) {
            //   if (str_year.search(this.Year) == 0) {

            //     this.searchedItems.push(this.persons[i]);
            //   }
            // }
      }
    }

    fsearchClinicType() {
      console.log(this.persons)
      for(var i = 0; i < this.persons.length; i++) {

        var str_clinictype =  !_.isEmpty(this.persons[i].clinictype)?this.persons[i].clinictype:"no data";

            if (str_clinictype.search(this.ClinicType) == 0 ) {
              this.searchedItems.push(this.persons[i]);
            } else {
              console.log("Does not contain ClinicType &&  District && Year" );
            }
      }
    }
    fOperatorname(value) {
      console.log(value)
      for(var i = 0; i < this.persons.length; i++) {

        var re = value.trim();
        var str = !_.isEmpty(this.persons[i].operatorname)?this.persons[i].operatorname:"no data";
            if (str.search(re) == -1 ) {
              console.log("Does not contain operatorname "+re );
            } else {
              this.searchedItems.push(this.persons[i]);
            }

      }
    }


    goto(item){
      window.scrollTo(0, 0);
      this.cookieService.set('storedata_survey',JSON.stringify(item));
      this.router.navigateByUrl('/Survey'+window.location.search);
      this.DataService.searchDetail = item;

    }

  ngOnInit() {
    this.loadingScreenService.startLoading();
    this._compiler.clearCache();
    setTimeout(() => {
      if(this.Clinicname != 'undefined')
      {
        this.fsearchRecursive(this.Clinicname)
        return
      }
      if(this.Customername != 'undefined')
      {
        this.fCustomername(this.Customername)
        return
      }
      if(this.Operatorname != 'undefined')
      {
      this.fOperatorname(this.Operatorname)
      return
      }

      // if(this.District != 'nodata')
      // {
      // this.fsearchSummay();
      // return
      // }


      // if( this.ClinicType != 'nodata' &&
      // this.Clinicname == 'undefined' &&
      // this.Customername == 'undefined' &&
      // this.Operatorname == 'undefined'
      //   )
      // {
      // this.fsearchClinicType()
      // return
      // }
      // else
      // {
      //   this.searchedItems = this.persons;
      //   return

      // }





      if(this.Clinicname == 'undefined' && this.Customername == 'undefined' && this.Operatorname == 'undefined')
        this.fsearchSummay()

    }, 2000);
  }



}
