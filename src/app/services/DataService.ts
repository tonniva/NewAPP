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
  Licensenumber: string;
  Professionallicensenumber: string;
  Operatorname: string;
  Address: string;
  Status: string;
  ClinicType: string;
  ClinicTypeName: string;
  Distric: string;
  DistrictName: string;
  Year: string; 
  Image: string;
  ImageUrl: string;
  Latitude: string;
  Longitude: string;
}


