import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { DiningdataService,diningDataType } from '../../services/diningdata.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent,CommonModule,FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'  
})
export class HomeComponent {
  private http: HttpClient;private diningdata:DiningdataService;private router:Router;  private timer: any;
  newdiningData:diningDataType;allmealplans:diningDataType[]=[];editmessage=''
  constructor(http:HttpClient,diningdata:DiningdataService,router:Router) {
    this.http=http;
    this.router=router;
    this.diningdata=diningdata;
    this.newdiningData={
      morning_meal_plan_count:0,
      afternoon_meal_plan_count:0,
      evening_meal_plan_count:0,
      date:''
    }
    diningdata._diningdata.subscribe((data: diningDataType[]) => {
      this.allmealplans=data;
    });
    http.get<diningDataType[]>(environment.getAllDiningData).subscribe((data: diningDataType[]) => {
      diningdata.postAllData(data);
    });

    const navigation = this.router.getCurrentNavigation();
    if(navigation?.extras.state){
      this.editmessage=navigation.extras.state['message'];
      this.timer = setTimeout(() => {
        this.editmessage = '';
      }, 5000);
    }
    else{
      this.editmessage='';
    }
  }
  addItem(){
    if(this.newdiningData.date==''){
      alert('Please enter date');
      return;
    }
    this.http.post<diningDataType>(environment.getAllDiningData,this.newdiningData).subscribe((data:diningDataType)=>{
      this.diningdata.postOneData(data);
      this.editmessage="New Information added successfully";
    this.timer = setTimeout(() => {
      this.editmessage = '';
    }, 5000);
    })  
  }


  editMealPlan(data:diningDataType){
    this.router.navigate(['/frontend/editview'], { state: { mealPlanData: data } });
  }



  deleteMealPlan(data:diningDataType){
    this.http.delete(environment.getAllDiningData+`/${data.id}`).subscribe(()=>{
      this.diningdata.deleteOneData(data);
    })
    this.editmessage="Delete was successful";
    this.timer = setTimeout(() => {
      this.editmessage = '';
    }, 5000);
  }
  ngOnDestroy(): void {
    clearTimeout(this.timer); 
  }

}
