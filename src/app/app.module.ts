import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import  {FormsModule} from '@angular/forms'
import { CookieService } from 'ngx-cookie-service';

import { CommonModule } from '@angular/common';

import { AgmCoreModule } from '@agm/core';
import { GooglemapComponent } from './components/googlemap/googlemap.component';
import { PageMenuComponent } from './components/page-menu/page-menu.component';

import { CreateUserComponent } from './components/create-user/create-user.component';

import { RouterModule,Routes } from '@angular/router';
import { SurveyComponent } from './components/survey/survey.component';
import { ContactComponent } from './components/contact/contact.component';
import { SearchComponent } from './components/search/search.component'; 
import {ApiService,GoogleDriveProvider} from './services/api.service'; 

import {HttpModule} from '@angular/http';
import { LoginComponent } from './components/login/login.component';
import { SearchSummayComponent } from './search-summay/search-summay.component';

import { ChartModule } from 'angular2-chartjs';

// import {Injectable} from '@angular/core';
// import {Http} from '@angular/http';
// import 'rxjs/add/operator/map';

 const appRoutes:Routes  =[
  //  {path:"",component:PageMenuComponent},
   {path:"",component:LoginComponent},
   {path:"Login",component:LoginComponent},
   {path:"createuser",component:CreateUserComponent}, 
   {path:"Survey",component:SurveyComponent},
   {path:"Contact",component:ContactComponent},
   {path:"user",component:UserComponent},
   {path:"SearchSummary",component:SearchSummayComponent},
   {path:"Search",component:SearchComponent,
   
  children:[
    {path:"googlemap",component:GooglemapComponent}, 
  ]
},
  


 ]
@NgModule({
  declarations: [ 
    AppComponent,
    UserComponent,
    GooglemapComponent,
    PageMenuComponent,
    CreateUserComponent,
    SurveyComponent,
    ContactComponent,
    SearchComponent,
    LoginComponent,
    SearchSummayComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    FormsModule,
    HttpModule,
    // Injectable,
    // Http,
    ChartModule,
    RouterModule.forRoot(appRoutes),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyC6OQeA3GhBE-juQnaLUYepQ-ZTbALTFfM'
    })
  ],
  providers: [ApiService,GoogleDriveProvider,CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
