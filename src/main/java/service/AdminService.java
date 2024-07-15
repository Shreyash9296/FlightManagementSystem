package service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import model.Booking;
import model.Flight;
import repository.BookingRepository;
import repository.FlightRepository;

@Service
public class AdminService {
    
    @Autowired
    private FlightRepository flightRepository;
    
    @Autowired
    private BookingRepository bookingRepository;
    
    public void createNewBooking(Booking booking, int flightId) {
        Flight flight = flightRepository.findById(flightId).orElseThrow();
        booking.setFlight(flight);
        bookingRepository.save(booking);
    }
    
    public void deleteBooking(int id) {
        bookingRepository.deleteById(id);
    }
    
    public void updateBooking(int id, Booking booking) {
        Booking existingBooking = bookingRepository.findById(id).orElseThrow();
        existingBooking.setPassengerName(booking.getPassengerName());
        existingBooking.setContactNumber(booking.getContactNumber());
        existingBooking.setEmail(booking.getEmail());
        bookingRepository.save(existingBooking);
    }
}
