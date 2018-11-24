import 'rxjs/add/operator/map';
import { Injectable} from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';



@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  constructor(private http:Http) { }

  getSearch(Clinicname){
    // API จริง
    // this json plea
    //return this.http.get("https://jsonplaceholder.typicode.com/posts/"+Clinicname).map((res)=>res.json());
   
   //this reqres.in
   //use ใช้ได้
    // return this.http.get(" https://reqres.in/api/users?page="+Clinicname).map((res)=>res.json());
    //test
    return this.http.get("https://apissj-api.azurewebsites.net/books/"+Clinicname).map((res)=>res.json().user[0]);
   
    

    
    //  console.log(Clinicname)  
   //API localhost สำหรับเทส
    //return this.http.get("http://localhost:3000/books"+Clinicname).map((res)=>res.json());
  
  }

  // getSearch(id): Observable<any> {
  //       return this.http
  //           .get('https://jsonplaceholder.typicode.com/posts')
  //           .map(response => { return response.json(); });
  //   }

 
}


// import { Injectable} from '@angular/core';
// import { Http } from '@angular/http';
// import { Observable } from 'rxjs/Observable';

// @Injectable()

// export class HostelService {

//     constructor( private _http: Http) { }            

//     getHostel(id): Observable<any> {
//         return this._http
//             .get('http://localhost/api/hostel/' + id)
//             .map(response => { return response.json(); });
//     }
// }


