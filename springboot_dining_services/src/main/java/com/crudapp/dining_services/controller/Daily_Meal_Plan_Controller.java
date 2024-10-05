package com.crudapp.dining_services.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.crudapp.dining_services.model.Daily_meal_plan_counts;
import com.crudapp.dining_services.service.Daily_Meal_Plan_Service;

@RestController
@RequestMapping("/backend")
public class Daily_Meal_Plan_Controller {
	@Autowired
	private Daily_Meal_Plan_Service daily_Meal_Plan_Service;
	
	
	@GetMapping
	public List<Daily_meal_plan_counts> getAllMealPlans(){
		return daily_Meal_Plan_Service.findAll();
	}

    @GetMapping("/{id}")
    public ResponseEntity<Daily_meal_plan_counts> getUserById(@PathVariable Long id) {
    	Daily_meal_plan_counts daily_meal_plan_counts = daily_Meal_Plan_Service.findById(id);
        if (daily_meal_plan_counts != null) {
            return ResponseEntity.ok(daily_meal_plan_counts);
        }
        return ResponseEntity.notFound().build();
    }

    
    @PostMapping
    public Daily_meal_plan_counts createUser(@RequestBody Daily_meal_plan_counts user) {
        return daily_Meal_Plan_Service.save(user);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Daily_meal_plan_counts> updateUser(@PathVariable Long id, @RequestBody Daily_meal_plan_counts meal_plan_counts) {
    	Daily_meal_plan_counts daily_meal_plan_counts = daily_Meal_Plan_Service.findById(id);
        if (daily_meal_plan_counts != null) {
        	daily_meal_plan_counts.setMorning_meal_plan_count(meal_plan_counts.getMorning_meal_plan_count());
        	daily_meal_plan_counts.setAfternoon_meal_plan_count(meal_plan_counts.getAfternoon_meal_plan_count());
        	daily_meal_plan_counts.setEvening_meal_plan_count(meal_plan_counts.getEvening_meal_plan_count());
            return ResponseEntity.ok(daily_Meal_Plan_Service.save(daily_meal_plan_counts));
        }
        return ResponseEntity.notFound().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteUser(@PathVariable Long id) {
    	daily_Meal_Plan_Service.deleteById(id);
        return ResponseEntity.noContent().build();
    }

	
}
