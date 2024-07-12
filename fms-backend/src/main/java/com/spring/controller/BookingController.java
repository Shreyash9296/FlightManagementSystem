package com.spring.controller;

import java.util.List;

import com.spring.model.Booking;
import com.spring.model.User;
import com.spring.service.BookingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/bookings")
public class BookingController {

    @Autowired
    private BookingService bookingService;

    @GetMapping
    private List<Booking> getAllBooking()
    {
        return bookingService.getAllBookings();

    }

    @GetMapping("/{id}")
    private Booking getBookingById(@PathVariable("id") int id)
    {
        return bookingService.getBookingById(id);
    }

    @PostMapping
    private int createBooking(@RequestBody Booking booking)
    {
        bookingService.createBooking(booking);
        return booking.getId();
    }
    @PutMapping("/{id}")
    public Booking updateBooking(@PathVariable int id, @RequestBody Booking booking) {
        return bookingService.updateBooking(id, booking);
    }

    @DeleteMapping("/{id}")
    private void deleteBookingById(@PathVariable ("id") int id)
    {
        bookingService.deleteBookingById(id);
    }







    /*
     * @RequestMapping("/insert") public String index() {
     *
     * jdbc.execute("insert into user(name,email) values('Manisha','m@gmail.com')");
     *
     * return "Row inserted successfully"; }
     */

}