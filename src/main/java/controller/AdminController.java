package controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import model.Booking;
import service.AdminService;

@RestController
@RequestMapping("/api/admin")
public class AdminController {
    
    @Autowired
    private AdminService adminService;
    
    @PostMapping("/create-booking")
    public ResponseEntity<String> createNewBooking(@RequestBody Booking booking, @RequestParam int flightId) {
        adminService.createNewBooking(booking, flightId);
        return ResponseEntity.ok("Booking created successfully");
    }
    
    @DeleteMapping("/delete-booking/{id}")
    public ResponseEntity<String> deleteBooking(@PathVariable int id) {
        adminService.deleteBooking(id);
        return ResponseEntity.ok("Booking deleted successfully");
    }
    
    @PutMapping("/update-booking/{id}")
    public ResponseEntity<String> updateBooking(@PathVariable int id, @RequestBody Booking booking) {
        adminService.updateBooking(id, booking);
        return ResponseEntity.ok("Booking updated successfully");
    }
}
