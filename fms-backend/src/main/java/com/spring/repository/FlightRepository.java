package com.spring.repository;

import com.spring.model.Flight;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Date;
import java.util.List;

// FlightRepository.java
public interface FlightRepository extends JpaRepository<Flight, Integer> {
    List<Flight> findByDepartureCityAndArrivalCity(String departureCity, String arrivalCity);
    List<Flight> findByDepartureDateBetween(Date startDate, Date endDate);
}

