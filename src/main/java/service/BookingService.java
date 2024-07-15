package service;
import repository.BookingRepository;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import model.Booking;
@Service
public class BookingService {
    @Autowired
    BookingRepository bookingRepository;


    public List <Booking> getAllBookings()
    {
        return bookingRepository.findAll();

    }

    public Booking getBookingById(int id)
    {
        return bookingRepository.findById(id).get();

    }

    public void createBooking(Booking  booking)
    {
        bookingRepository.save(booking);
    }
    public Booking updateBooking(int id, Booking booking) {
        Booking existingBooking = getBookingById(id);
        existingBooking.setPassengerName(booking.getPassengerName());
        existingBooking.setContactNumber(booking.getContactNumber());
        existingBooking.setEmail(booking.getEmail());
        existingBooking.setFlight(booking.getFlight());
        return bookingRepository.save(existingBooking);
    }
    //delete a specific record
public void deleteBookingById(int id)
    {
        bookingRepository.deleteById(id);
    }

   
}
