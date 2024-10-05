package com.crudapp.dining_services.model;

import java.time.LocalDate;

import org.antlr.v4.runtime.misc.NotNull;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="daily_meal_plan_counts")
public class Daily_meal_plan_counts {
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private int morning_meal_plan_count;
	private int afternoon_meal_plan_count;
	private int evening_meal_plan_count;
    @Column(nullable = false) 
	private LocalDate date;
	public int getEvening_meal_plan_count() {
		return evening_meal_plan_count;
	}
	public void setEvening_meal_plan_count(int evening_meal_plan_count) {
		this.evening_meal_plan_count = evening_meal_plan_count;
	}
	public int getAfternoon_meal_plan_count() {
		return afternoon_meal_plan_count;
	}
	public void setAfternoon_meal_plan_count(int afternoon_meal_plan_count) {
		this.afternoon_meal_plan_count = afternoon_meal_plan_count;
	}
	public int getMorning_meal_plan_count() {
		return morning_meal_plan_count;
	}
	public void setMorning_meal_plan_count(int morning_meal_plan_count) {
		this.morning_meal_plan_count = morning_meal_plan_count;
	}
	public LocalDate getDate() {
		return date;
	}
	
	public void setDate(LocalDate date) {
		this.date = date;
	}
}
