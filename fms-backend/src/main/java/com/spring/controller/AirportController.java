package com.spring.controller;

import com.spring.model.Airport;
import com.spring.service.AirportService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

// AirportController.java
@RestController
@RequestMapping("/airports")
public class AirportController {
    @Autowired
    private AirportService airportService;

    @GetMapping
    public List<Airport> getAllAirports() {
        return airportService.getAllAirports();
    }

    @GetMapping("/{id}")
    public Airport getAirportById(@PathVariable int id) {
        return airportService.getAirportById(id);
    }

    @GetMapping("/city/{city}")
    public List<Airport> getAirportsByCity(@PathVariable String city) {
        return airportService.getAirportsByCity(city);
    }

    @GetMapping("/country/{country}")
    public List<Airport> getAirportsByCountry(@PathVariable String country) {
        return airportService.getAirportsByCountry(country);
    }

    @PostMapping
    public Airport createAirport(@RequestBody Airport airport) {
        return airportService.createAirport(airport);
    }

    @PutMapping("/{id}")
    public Airport updateAirport(@PathVariable int id, @RequestBody Airport airport) {
        airport.setId(id);
        return airportService.updateAirport(airport);
    }

    @DeleteMapping("/{id}")
    public void deleteAirport(@PathVariable int id) {
        airportService.deleteAirport(id);
    }
}
