import { Component, OnInit } from '@angular/core';
import { LoadingScreenService } from "../services/loading-screen/loading-screen.service";
@Component({
  selector: 'app-wrapper-loading',
  templateUrl: './wrapper-loading.component.html',
  styleUrls: ['./wrapper-loading.component.css']
})
export class WrapperLoadingComponent implements OnInit {
  showSpinner: boolean = false;

  constructor(private loadingScreenService: LoadingScreenService) { }

  ngOnInit() {

    this.loadingScreenService.isOpen$.subscribe(isOpen =>{
      this.showSpinner = isOpen
    }




      ) 

  }

}
