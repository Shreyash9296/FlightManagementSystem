package com.spring.service.PaymentService;
import org.springframework.stereotype.Service;
import java.util.List;
@Service
public class PaymentService {
    @Autowired
    private PaymentRepository paymentRepository;

    @Autowired
    private BookingRepository bookingRepository;

    public Payment save(Long bookingId, Payment payment) {
        Booking booking = bookingRepository.findById(bookingId).orElseThrow(() -> new RuntimeException("Booking not found"));
        payment.setBooking(booking);
        payment.setAmount(booking.getPrice()); // Set the payment amount from the booking price
        return paymentRepository.save(payment);
    }

    public List<Payment> findAll() {
        return paymentRepository.findAll();
    }

    public Payment findById(Long id) {
        return paymentRepository.findById(id).orElse(null);
    }

    public void deleteById(Long id) {
        paymentRepository.deleteById(id);
    }
}