package com.crudapp.dining_services.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.crudapp.dining_services.model.Daily_meal_plan_counts;
import com.crudapp.dining_services.repository.Daily_Meal_Plan_Repository;

@Service
public class Daily_Meal_Plan_Service {

 @Autowired
 private Daily_Meal_Plan_Repository daily_Meal_Plan_Repository;
 
 public List<Daily_meal_plan_counts> findAll(){
	 return daily_Meal_Plan_Repository.findAll();
 }
 
 public Daily_meal_plan_counts findById(Long id) {
	 return daily_Meal_Plan_Repository.findById(id).orElse(null);
 }
 
 public Daily_meal_plan_counts save(Daily_meal_plan_counts user) {
     return daily_Meal_Plan_Repository.save(user);
 }

 public void deleteById(Long id) {
	 daily_Meal_Plan_Repository.deleteById(id);
 }
}
