package com.example.catalog.api;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.catalog.dao.Dao;
import com.example.catalog.model.Event;


@RestController

public class EventController {
	@Autowired
	private Dao dao;
	
	
	
	public EventController(Dao dao) {
		this.dao = dao;
	}

	@PostMapping("/api/save")
	public Event saveEvent(@RequestBody Event e) {
		dao.save(e);
		return e;
	}
	
	@GetMapping("/api/get/{id}")
	public Optional<Event> getEvent(@PathVariable String id) {
		return dao.findById(id);
	}
	@GetMapping("/api/getall")
	public List<Event> getAllEvents(){
		return dao.findAll();
	}
}
