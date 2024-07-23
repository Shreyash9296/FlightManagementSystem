package com.spring.repository;

import com.spring.model.Flight;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Date;
import java.util.List;
import java.util.Optional;

// FlightRepository.java
@Repository
public interface FlightRepository extends JpaRepository<Flight, Integer> {
    List<Flight> findByDepartureCityAndArrivalCity(String departureCity, String arrivalCity);
    List<Flight> findByDepartureTimeBetween(Date startDate, Date endDate);
    Optional<Flight> findById(Long id);
}

