
import {Compiler, Component, OnInit,Input, } from '@angular/core';
import {DataService} from '../services/DataService';
import {ApiService,GoogleDriveProvider} from '../services/api.service';
import { Router } from "@angular/router";
import { CookieService } from 'ngx-cookie-service';
import { PageMenuComponent } from './../components/page-menu/page-menu.component';

import * as $ from 'jquery';
import * as _ from "lodash";
import { LoadingScreenService } from "../services/loading-screen/loading-screen.service";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  @Input() PageMenuComponent?: PageMenuComponent;
  @Input() message : string ;

  private Clinicname = localStorage.getItem("Clinicname")||"";
  private Customername = localStorage.getItem("Customername")||"";
  private Operatorname = localStorage.getItem("Operatorname")||"";
  private ClinicType = localStorage.getItem("ClinicType")||"";
  private District = localStorage.getItem("District")||"";
  private Year = localStorage.getItem("Year")||"";
  public qr:any=window.location.search;

  corporation: Array<any>;
  dataId: string;
  provincekey: string;
  public searchedItems: Array<any> = [];
    constructor(private _compiler: Compiler,private DataService:DataService,gDrive:GoogleDriveProvider,private router: Router,private cookieService: CookieService,private loadingScreenService:LoadingScreenService) {


      this.dataId = this.getParameterByName("key");//
      this.provincekey = this.getParameterByName("p");//


      gDrive.load(this.dataId)
        .then(( data ) => {
          console.log( data );

          this.corporation =  _.chain(data)
          .map((value, key) => ({
            menuname: value.menuname,url: value.url, showmenu: JSON.parse(value.showmenu.toLocaleLowerCase())
          }))
          .value()



          this.corporation = data;
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
  showmenu(showmenu){

    return JSON.parse(showmenu.toLocaleLowerCase())


  }

    goto(item){
      window.scrollTo(0, 0);
      // var backurl = '&menukey='+this.dataId;
      window.location.href =item.url;

    }

  ngOnInit() {
    this.loadingScreenService.startLoading();
    this._compiler.clearCache();
  }



}
