package com.spring.controller;

import com.spring.model.Flight;
import com.spring.service.FlightService;
import org.springframework.beans.factory.annotation.Autowired;
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
    public Flight getFlightById(@PathVariable int id) {
        return flightService.getFlightById(id);
    }

    @GetMapping("/cities/{departureCity}/{arrivalCity}")
    public List<Flight> getFlightsByCities(@PathVariable String departureCity, @PathVariable String arrivalCity) {
        return flightService.getFlightsByCities(departureCity, arrivalCity);
    }

    @GetMapping("/date-range/{startDate}/{endDate}")
    public List<Flight> getFlightsByDateRange(@PathVariable Date startDate, @PathVariable Date endDate) {
        return flightService.getFlightsByDateRange(startDate, endDate);
    }

    @PostMapping
    public Flight createFlight(@RequestBody Flight flight) {
        return flightService.createFlight(flight);
    }

    @PutMapping("/{id}")
    public Flight updateFlight(@PathVariable int id, @RequestBody Flight flight) {
        flight.setId(id);
        return flightService.updateFlight(flight);
    }

    @DeleteMapping("/{id}")
    public void deleteFlight(@PathVariable int id) {
        flightService.deleteFlight(id);
    }
    @PostMapping("/admin")
    @PreAuthorize("hasRole('ADMIN')")
    public Flight createFlightAdmin(@RequestBody Flight flight) {
        return flightService.createFlight(flight);
    }

    @PutMapping("/admin/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    public Flight updateFlightAdmin(@PathVariable int id, @RequestBody Flight flight) {
        flight.setId(id);
        return flightService.updateFlight(flight);
    }

    @DeleteMapping("/admin/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    public void deleteFlightAdmin(@PathVariable int id) {
        flightService.deleteFlight(id);
    }
}
