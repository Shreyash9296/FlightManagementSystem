package com.spring.controller;

import com.spring.model.Flight;
import com.spring.service.FlightService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.security.access.prepost.PreAuthorize;
import java.util.Date;
import java.util.List;

// FlightController.java
@RestController
@RequestMapping("/flights")
public class FlightController {
    @Autowired
    private FlightService flightService;

    @GetMapping
    public List<Flight> getAllFlights() {
        return flightService.getAllFlights();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Flight> getFlightById(@PathVariable int id) {
        Flight flight = flightService.getFlightById(id);
        if (flight != null) {
            return ResponseEntity.ok(flight);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/cities/{departureCity}/{arrivalCity}")
    public List<Flight> getFlightsByCities(@PathVariable String departureCity, @PathVariable String arrivalCity) {
        return flightService.getFlightsByCities(departureCity, arrivalCity);
    }

    @GetMapping("/date-range")
    public List<Flight> getFlightsByDateRange(
            @RequestParam @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) Date startDate,
            @RequestParam @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) Date endDate) {
        return flightService.getFlightsByDateRange(startDate, endDate);
    }

    @PostMapping
    public ResponseEntity<Flight> createFlight(@RequestBody Flight flight) {
        System.out.println("Received flight data: " + flight);
        Flight savedFlight = flightService.createFlight(flight);
        return ResponseEntity.ok(savedFlight);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Flight> updateFlight(@PathVariable int id, @RequestBody Flight flight) {
        flight.setId(id);
        Flight updatedFlight = flightService.updateFlight(flight);
        if (updatedFlight != null) {
            return ResponseEntity.ok(updatedFlight);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteFlight(@PathVariable int id) {
        flightService.deleteFlight(id);
        return ResponseEntity.noContent().build();
    }
}