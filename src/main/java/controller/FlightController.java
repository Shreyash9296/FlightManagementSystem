package controller;
import java.util.Date;
import java.util.List;
import service.FlightService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.*;

import model.Flight;


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

}
