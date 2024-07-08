package com.string.controller;
import com.spring.model.Booking;
import com.spring.service.BookingService;
import org.sprignframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@RequestMapping("/api/bookings")
public  class BookingController{
    @Autowired
    private BookingService bookingService;

    @PostMapping
    public Booking createBooking(@RequestBody Booking booking){
        return bookingService.save(booking);
    }

    @GetMapping("/{id}")
    public Booking getBookingById(@PathVariable long id){
        return bookingService.findById(id);
    }

    @DeleteMapping("/{id}")
    public Booking deleteBooking(@PathVariable long id){
        return bookingService.deleteById(id);
    }

}
