package com.example.catalog.model;

import java.util.UUID;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.lang.NonNull;





@Document(collection="Events")
public class Event {
	@Id
	private String id;
	private String name;
	private String date;
	private int price;
	private String location;
	private int seats;
	public Event(String id, String name, String date, int price,String location,int seats) {
		this.id = id;
		this.name = name;
		this.date = date;
		this.price = price;
		this.location = location;
		this.seats = seats;
	}
	public int getSeats() {
		return seats;
	}
	public void setSeats(int seats) {
		this.seats = seats;
	}
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getLocation() {
		return location;
	}
	public void setLocation(String location) {
		this.location = location;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getDate() {
		return date;
	}
	public void setDate(String date) {
		this.date = date;
	}
	public int getPrice() {
		return price;
	}
	public void setPrice(int price) {
		this.price = price;
	}
	
	
}
