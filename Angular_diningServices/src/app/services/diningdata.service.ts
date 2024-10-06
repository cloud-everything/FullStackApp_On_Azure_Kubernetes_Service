import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export type diningDataType={
  id?:number,
  morning_meal_plan_count:number,
  afternoon_meal_plan_count:number,
  evening_meal_plan_count:number,
  date:string,
}



@Injectable({
  providedIn: 'root'
})
export class DiningdataService {

  private diningdata=new BehaviorSubject<diningDataType[]>([]);
  _diningdata=this.diningdata.asObservable();
  
  postAllData(data:diningDataType[])
  {
    this.diningdata.next(data);
  }
  postOneData(data:diningDataType){
    this.diningdata.next([...this.diningdata.value,data]);
  }
  deleteOneData(data:diningDataType){
    this.diningdata.next(this.diningdata.value.filter(d=>d.id!==data.id));
  }

  putOneData(data:diningDataType){
    this.diningdata.next(this.diningdata.value.map(d=>d.id===data.id? data : d));
  }
}
