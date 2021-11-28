import { Injectable} from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';





@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:Http) { }

  getSearch(Clinicname){
    return this.http.get("https://toniva.azurewebsites.net/books/"+Clinicname).map((res)=>res.json().user[0]);

  }

}

@Injectable()

export class GoogleDriveProvider {

  data: any = null;

  constructor(public http: Http) {}

  load( id ) {
    if (this.data) {
      // already loaded data
      return Promise.resolve(this.data);
    }
var url ="https://sheets.googleapis.com/v4/spreadsheets/"+id+"/values/%E0%B9%81%E0%B8%9C%E0%B9%88%E0%B8%991?key=AIzaSyBvWnxnwTcbj5lHYsfjHcav89KJr6qKlv4"
    // var url = 'https://spreadsheets.google.com/feeds/list/' + id + '/od6/public/values?alt=json';
    console.log("URL ::",url)
    // don't have the data yet
    return new Promise(resolve => {
      // We're using Angular Http provider to request the data,
      // then on the response it'll map the JSON data to a parsed JS object.
      // Next we process the data and resolve the promise with the new data.
      this.http.get(url)
        .map(res => res.json() )
        .subscribe( data => {
          console.log( 'Raw Data', data.values );
          this.data = data.values ;

          let returnArray: Array<any> = [];
          if( this.data && this.data.length > 0 ) {
            this.data.forEach( ( entry, index ) => {
              var obj = {};
              for( let x in entry ) {
                if( x.includes('gsx$') && entry[x].$t ){
                  obj[x.split('$')[1]] = entry[x]['$t'];
                  // console.log( x.split('$')[1] + ': ' + entry[x]['$t'] );
                }
              }
              returnArray.push( obj );
            });
          }


          var list = []
this.data.map((item,index)=>{
  if(item[0] =="firstname") return
const ovj ={
  firstname:item[0],
  lastname:item[1],
  email:item[2],
  tel:item[3],
  name:item[4],
  address:item[5],
  status:item[6],
  type:item[7],
  typeName:item[8],
  district:item[9],
  districtName:item[10],
  year:item[11],
  licensenumber:item[12],
  professionallicensenumber:item[13],
  operatorname:item[14],
  linkmap:item[15],
  timeOpeningAndClosing:item[16],
}
list.push(ovj)
})

          resolve(list);
        });
    });
  }
}


