package com.spring.service;


import java.util.ArrayList;
import java.util.List;

import com.spring.model.Booking;
import com.spring.model.User;
import com.spring.repository.BookingRepository;
import com.spring.repository.UserRepository;

import net.bytebuddy.dynamic.DynamicType.Builder.FieldDefinition.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BookingService {
    @Autowired
    BookingRepository bookingRepository;

    public List<Booking> getAllBookings() {
        return bookingRepository.findAll();
    }

    public Booking getBookingById(int id) {
        java.util.Optional<Booking> optionalBooking = bookingRepository.findById(id);
        return optionalBooking.orElse(null); // Return null if not found
    }

    public Booking createBooking(Booking booking) {
        return bookingRepository.save(booking); // Return the saved booking
    }

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

    public void deleteBookingById(int id) {
        bookingRepository.deleteById(id);
    }
}