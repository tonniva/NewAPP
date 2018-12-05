import 'rxjs/add/operator/map';
import { Injectable} from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  

  
  constructor() { }

  public searchDetail: ClsResponseAPI ;

 
}



interface ClsResponseAPI {
  Id: string;
  Clinicname: string;
  Customername: string;
  Operatorname: string;
  Address: string;
  Status: string;
  Image: string;
  ImageUrl: string;
  Latitude: string;
  Longitude: string;
}
