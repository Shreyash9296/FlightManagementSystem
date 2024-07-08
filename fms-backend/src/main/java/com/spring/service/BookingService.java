package com.spring.model.service;

import com.spring.model.Booking;
import com.string.repository.BookingRepository;
import org.springframework.stereotype.Service;
import java.util.List;

@service
public class BookingService{
    @Autowired
    private BookingRepository bookingRepository;

    public Booking save (Booking booking){
        return bookingRepository.save(booking);
    }
    public List<Booking> findAll(){
        return bookingRepository.findAll();
    }
    public Booking findById(long id){
        return bookingRepository.findById(id).orElse(null);
    }
    public void deleteById(long id){
        bookingRepository.deleteById(id);
    }
}

