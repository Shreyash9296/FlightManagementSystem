package repository;
import model.Airport;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
@Repository
public interface AirportRepository extends JpaRepository<Airport, Integer> {
    List<Airport> findByCity(String city);
    List<Airport> findByCountry(String country);
}
