package com.example.catalog.dao;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.example.catalog.model.Event;


public interface Dao extends MongoRepository<Event,String> {
	
	
	
}
