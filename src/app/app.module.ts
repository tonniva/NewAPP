import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import  {FormsModule} from '@angular/forms'


import { CommonModule } from '@angular/common';

import { AgmCoreModule } from '@agm/core';
import { GooglemapComponent } from './components/googlemap/googlemap.component';
import { PageMenuComponent } from './components/page-menu/page-menu.component';

import { CreateUserComponent } from './components/create-user/create-user.component';

import { RouterModule,Routes } from '@angular/router';
import { SurveyComponent } from './components/survey/survey.component';
import { ContactComponent } from './components/contact/contact.component';
import { SearchComponent } from './components/search/search.component';
import {ApiService} from './services/api.service';
import {HttpModule} from '@angular/http';
import { LoginComponent } from './components/login/login.component';

 const appRoutes:Routes  =[
   {path:"",component:PageMenuComponent},
   {path:"Login",component:LoginComponent},
   {path:"createuser",component:CreateUserComponent},
   {path:"Survey",component:SurveyComponent},
   {path:"Contact",component:ContactComponent},
   {path:"user",component:UserComponent},
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
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyC6OQeA3GhBE-juQnaLUYepQ-ZTbALTFfM'
    })
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
