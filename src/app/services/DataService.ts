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

// interface ClsResponseAPI {
//     Clinicname: string;
//     Customername: string;
//     Operatorname: string;
//     Address: string;
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
