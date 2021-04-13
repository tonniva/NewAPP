
import { ApiService, GoogleDriveProvider } from '../../../../services/api.service';
import { Router, ActivatedRoute, Params } from "@angular/router";
import * as _ from 'lodash';
import { LoadingScreenService } from "../../../../services/loading-screen/loading-screen.service";
import { Compiler,Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drugstore',
  templateUrl: './drugstore.component.html',
  styleUrls: ['./drugstore.component.css']
})

export class DrugstoreComponent implements OnInit {
  persons: Array<any>;
  dataId: string;
  message = "test"
  districtGroup: Array<any>;


  private searchedItems: Array<any> = [];
  private key: string;
  private prop: string;
  private childrenPropName: string;

  // private searctServiceData:searctService[];

  //select ประเภทคลินิก
  public Type: string = '';
  selectClinicTypeChangeHandler(event: any) {
    //update the ui
    this.Type = event.target.value;
  }
  //select
  //select เลือกอำเภอ
  public District: string = '';
  selectDistrictChangeHandler(event: any) {
    //update the ui
    this.District = event.target.value;
  }
  //select

  //select เลือกปี
  public Year: string = '';
  selectYearChangeHandler(event: any) {
    //update the ui
    this.Year = event.target.value;
  }
  //select



  private Name: string;  // เราป้อนค่า id = 5 ที่ตัวแปรนี้
  private hostelDetail: any;

  public names: string;


  public type: any;
  public data: any;
  public options: any;
  public Licensenumber: any;
  public Pharmacyname: any;


  public typeyear: any;
  public datayear: any;
  public optionsyear: any;

  public provincekey: any;
  public keysheet: any;
  public selectyear=[];

  public qr:any=window.location.search;

  constructor(private activatedRoute: ActivatedRoute, private _compiler: Compiler, private ApiService: ApiService, private gDrive: GoogleDriveProvider, private router: Router,private loadingScreenService: LoadingScreenService) {

  }

  ngOnInit() {
    this.inityear()



    this.persons =[];
     this.loadingScreenService.startLoading();

    localStorage.clear();
    this._compiler.clearCache();


    this.activatedRoute.queryParams.subscribe(params => {
      this.keysheet = params['key'];
      this.provincekey = params['p'];
      if(this.provincekey == undefined) {
        return this.router.navigate(['']);
      }

      console.log(this.keysheet,this.provincekey)

      this.gDrive.load(this.keysheet)
      .then((data) => {


        console.log(data);
        this.persons = data;


        setTimeout(()=>{
          this.initgraph(this.persons)
          this.initgraphyear(this.persons)


        }, 1000);

      }, (error) => {

        console.log(error);
      });

    });

  }

  inityear(){
    var yearindex= new Date().getFullYear()+543;
    while (this.selectyear.length < 35) {
      this.selectyear.push(yearindex);
      yearindex = yearindex - 1;
    }
  }

  model: any = {};

  initgraph(datagraph) {
    var group = _.chain(datagraph)
      .groupBy("district")
      .map((value, key) => ({
        district: key, districtname: value[0].districtname, users: value
      }))
      .value()

      if(group[0].district =='undefined'){
        location.reload();
      }
      else{
        this.loadingScreenService.stopLoading();
      }
    var district = [];
    var district_graph = [];
    var count = [];
    group.forEach(item => {
      var temp ={
        "district":item.district,
        "districtname":item.districtname,
      }
      district.push(temp);
      district_graph.push(item.districtname);
      count.push(item.users.length);
    });

    this.districtGroup = district;
    this.type = 'bar';
    this.data = {
      labels: district_graph,
      backgroundColor: 'rgba(0, 0, 0, 0.1)',
      datasets: [
        {
          data: count,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }
      ]
    };
    this.options = {
      legend: {
        display: false
      },
      title: {
        display: true,
        text: 'จำนวนสถานประกอบการเพื่อสุขภาพแต่ละอำเภอ',
        fontSize: 15
      },
      responsive: true,
      maintainAspectRatio: false
    };

  }


  initgraphyear(datagraph) {
    var group = _.chain(datagraph)
      .groupBy("year")
      .map((value, key) => ({ year: key, users: value }))
      .value()

    var year = [];
    var count = [];
    group.forEach(item => {

      year.push(item.year);
      count.push(item.users.length);
    });


    this.typeyear = 'line';
    this.datayear = {
      labels: year,
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      datasets: [
        {
          data: count,
          backgroundColor: [
            'rgba(75, 192, 192, 0.2)',
            'rgba(75, 192, 192, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderColor: [
            'rgba(75, 192, 192, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }
      ]
    };
    this.optionsyear = {
      fullWidth: true,
      legend: {
        display: false
      },
      title: {
        display: true,
        text: 'จำนวนสถานประกอบการ แต่ละปีที่ได้รับอนุญาต',
        fontSize: 18
      },
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        yAxes: [{
          ticks: {
            fontSize: 8
          }
        }]
      }
    };
  }
  onSubmit() {
    localStorage.setItem("name", this.model.name);
    localStorage.setItem("Customername", this.model.Customername);
    localStorage.setItem("Operatorname", this.model.Operatorname);
    localStorage.setItem("Licensenumber", this.model.Licensenumber);
    localStorage.setItem("Type", this.Type);
    localStorage.setItem("District", this.District);
    localStorage.setItem("Year", this.Year);
    localStorage.setItem("Pharmacyname", this.model.Pharmacyname);




// console.log(window.location.search);
const name = encodeURIComponent("ร้านขายยา");
    const q ="?p="+this.provincekey+'&key='+this.keysheet+'&t='+name;
    this.router.navigateByUrl('/SearchSummary'+q);

  }

  searchRecursive(value) {
    for (var i = 0; i < this.persons.length; i++) {
      if (value == this.persons[i].massagename) {
        this.searchedItems.push(this.persons[i]);
      }
    }

  }


  districtname(districtname){
  return districtname;
}



}

