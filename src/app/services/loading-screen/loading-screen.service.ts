import { Injectable, SkipSelf } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs/internal/observable/of';
@Injectable({
  providedIn: 'root'
})
export class LoadingScreenService {

  constructor() { }



  private loading: boolean = false;


  getloading() {
   return this.loading;
  }
  public isOpen$ = new BehaviorSubject(false);
  startLoading() {
    this.isOpen$.next(true)
    // this.loading =this.isOpen$.isStopped;
  }

  stopLoading() {
    this.isOpen$.next(false)
    // this.loading = false;
  }




  toggle(): void {
    this.isOpen$.next(!this.isOpen$.getValue());
    console.log('Im inside toggle');
  }

   getIsOpen(): Observable<boolean>{
    console.log('Im inside getIsOpen');
    return this.isOpen$;
  }
}
