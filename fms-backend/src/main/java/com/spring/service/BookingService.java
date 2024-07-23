package com.spring.service;


import java.util.ArrayList;
import java.util.List;

import javax.persistence.EntityNotFoundException;

import com.spring.model.Booking;
import com.spring.model.Flight;
import com.spring.model.User;
import com.spring.repository.*;
import net.bytebuddy.dynamic.DynamicType.Builder.FieldDefinition.Optional;


import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class BookingService {
    @Autowired
    BookingRepository bookingRepository;
    @Autowired
    FlightRepository flightRepository;
    
@Transactional(readOnly = true)
    public List<Booking> getAllBookings() {
        return bookingRepository.findAll();
    }
@Transactional(readOnly = true)
    public Booking getBookingById(int id) {
        java.util.Optional<Booking> optionalBooking = bookingRepository.findById(id);
        return optionalBooking.orElse(null); // Return null if not found
    }
    @Transactional
    public Booking createBooking(Booking bookingRequest) {
        System.out.println("Creating booking: " + bookingRequest);
    
        // Check if flight ID is valid
        if (bookingRequest.getFlight() == null || bookingRequest.getFlight().getId() == 0) {
            throw new IllegalArgumentException("Flight information is missing");
        }
    
        // Retrieve flight from repository
        Flight flight = flightRepository.findById(bookingRequest.getFlight().getId())
            .orElseThrow(() -> new EntityNotFoundException("Flight not found with id: " + bookingRequest.getFlight().getId()));
    
        // Check available seats
        if (flight.getAvailableSeats() < bookingRequest.getNumberOfPassengers()) {
            throw new IllegalStateException("Not enough available seats for this booking");
        }
    
        // Update available seats
        flight.setAvailableSeats(flight.getAvailableSeats() - bookingRequest.getNumberOfPassengers());
        flightRepository.save(flight);
    
        // Set flight and save booking
        bookingRequest.setFlight(flight);
        return bookingRepository.save(bookingRequest);
    }
    
    
@Transactional
    public Booking updateBooking(int id, Booking booking) {
        Booking existingBooking = getBookingById(id);
        if (existingBooking != null) {
            existingBooking.setPassengerName(booking.getPassengerName());
            existingBooking.setContactNumber(booking.getContactNumber());
            existingBooking.setEmail(booking.getEmail());
            existingBooking.setFlight(booking.getFlight());
            return bookingRepository.save(existingBooking); // Return the updated booking
        } else {
            return null; // Return null if the booking was not found
        }
    }
@Transactional
    public void deleteBookingById(int id) {
        bookingRepository.deleteById(id);
    }
}