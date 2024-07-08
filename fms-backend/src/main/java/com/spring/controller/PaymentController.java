import com.spring.controller.PaymentController;
import org.sprignframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.spring.model.Payment;
import com.spring.service.PaymentService;

@RestController
@RequestMapping("/api/payments")
public class PaymentController {
    @Autowired
    private PaymentService paymentService;

    @PostMapping("/{bookingId}")
    public Payment createPayment(@PathVariable Long bookingId, @RequestBody Payment payment) {
        return paymentService.save(bookingId, payment);
    }

    @GetMapping
    public List<Payment> getAllPayments() {
        return paymentService.findAll();
    }

    @GetMapping("/{id}")
    public Payment getPaymentById(@PathVariable Long id) {
        return paymentService.findById(id);
    }

    @DeleteMapping("/{id}")
    public void deletePayment(@PathVariable Long id) {
        paymentService.deleteById(id);
    }
}

