package com.crudapp.dining_services.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.crudapp.dining_services.model.Daily_meal_plan_counts;

public interface Daily_Meal_Plan_Repository extends JpaRepository<Daily_meal_plan_counts, Long> {

}
