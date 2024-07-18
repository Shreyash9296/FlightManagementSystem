package com.spring.service;

import com.spring.model.Flight;
import com.spring.repository.FlightRepository;

import net.bytebuddy.dynamic.DynamicType.Builder.FieldDefinition.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

// FlightService.java
@Service
public class FlightService {
    @Autowired
    private FlightRepository flightRepository;

    public List<Flight> getAllFlights() {
        return flightRepository.findAll();
    }

    public Flight getFlightById(int id) {
        java.util.Optional<Flight> flight = flightRepository.findById(id);
        return flight.orElse(null);
    }

    public List<Flight> getFlightsByCities(String departureCity, String arrivalCity) {
        return flightRepository.findByDepartureCityAndArrivalCity(departureCity, arrivalCity);
    }

    public List<Flight> getFlightsByDateRange(Date startDate, Date endDate) {
        return flightRepository.findByDepartureTimeBetween(startDate, endDate);
    }

    public Flight createFlight(Flight flight) {
        return flightRepository.save(flight);
    }

    public Flight updateFlight(Flight flight) {
        return flightRepository.save(flight);
    }

    public void deleteFlight(int id) {
        flightRepository.deleteById(id);
    }
}