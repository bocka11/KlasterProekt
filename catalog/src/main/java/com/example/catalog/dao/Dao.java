package com.example.catalog.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.catalog.model.Event;


public interface Dao extends MongoRepository<Event,String> {
	
	@Query("{'name':?0}")
	List<Event> findByName(String name);
		
	
	
}
