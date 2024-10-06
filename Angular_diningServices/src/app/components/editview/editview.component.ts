import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { Router } from '@angular/router';
import { DiningdataService,diningDataType } from '../../services/diningdata.service';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
@Component({
  selector: 'app-editview',
  standalone: true,
  imports: [NavbarComponent,FormsModule],
  templateUrl: './editview.component.html',
  styleUrl: './editview.component.css'
})
export class EditviewComponent {
  private router:Router;newdiningData:diningDataType;private http:HttpClient;diningdata:DiningdataService
  constructor(router:Router,diningdata:DiningdataService,http:HttpClient) {
    this.http = http;
    this.router = router;
    this.diningdata=diningdata;
    const navigation = this.router.getCurrentNavigation();
    this.newdiningData={
      morning_meal_plan_count:0,
      afternoon_meal_plan_count:0,
      evening_meal_plan_count:0,
      date:''
    }
    if (navigation?.extras.state) {
      this.newdiningData = navigation.extras.state['mealPlanData'];
    }
  }
  editItem(){
    
    if(this.newdiningData.date===''){
      alert("Please enter date");
      return;
    }
    this.http.put<diningDataType>(environment.getAllDiningData+"/"+this.newdiningData.id,this.newdiningData).subscribe((data: diningDataType) => {
      this.diningdata.putOneData(data)
    });
    this.router.navigate(['/frontend/home'],{state:{message:"Information was updated successfully"}});
  }
}
