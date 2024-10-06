import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DiningdataService {

  private diningdata=new BehaviorSubject([]);
  _diningdata=this.diningdata.asObservable();
  constructor() { }

}
