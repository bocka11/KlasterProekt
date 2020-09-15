package com.example.catalog;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

import com.example.catalog.api.EventController;

@SpringBootApplication(scanBasePackages={
		"api", "dao","model","service"})
@ComponentScan(basePackageClasses=EventController.class)
public class CatalogApplication {

	public static void main(String[] args) {
		SpringApplication.run(CatalogApplication.class, args);
	}

}
