package com.example.fms_backend;

import org.springframework.boot.SpringApplication;

import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
@EnableWebSecurity
@SpringBootApplication
public class FmsBackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(FmsBackendApplication.class, args);
	}

}
