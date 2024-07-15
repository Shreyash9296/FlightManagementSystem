package repository;

import java.util.Date;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import model.Flight;
@Repository
public interface FlightRepository extends JpaRepository<Flight, Integer> {
    List<Flight> findByDepartureCityAndArrivalCity(String departureCity, String arrivalCity);
    List<Flight> findByDepartureDateBetween(Date startDate, Date endDate);
}
