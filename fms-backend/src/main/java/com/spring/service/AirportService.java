package com.spring.service;


import com.spring.model.Airport;
import com.spring.repository.AirportRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AirportService {
    @Autowired
    private AirportRepository airportRepository;

    public List<Airport> getAllAirports() {
        return airportRepository.findAll();
    }

    public Airport getAirportById(int id) {
        return airportRepository.findById(id).get();
    }

    public List<Airport> getAirportsByCity(String city) {
        return airportRepository.findByCity(city);
    }

    public List<Airport> getAirportsByCountry(String country) {
        return airportRepository.findByCountry(country);
    }

    public Airport createAirport(Airport airport) {
        return airportRepository.save(airport);
    }

    public Airport updateAirport(Airport airport) {
        return airportRepository.save(airport);
    }

    public void deleteAirport(int id) {
        airportRepository.deleteById(id);
    }
}
