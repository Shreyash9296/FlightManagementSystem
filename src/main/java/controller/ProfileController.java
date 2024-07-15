package controller;

import model.Booking;
import model.Profile;
import service.ProfileService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/profile")
public class ProfileController {
    private final ProfileService profileService;
    
    @Autowired
    public ProfileController(ProfileService profileService) {
        this.profileService = profileService;
    }
    
    @GetMapping("/{id}")
    public Profile getProfile(@PathVariable int id) {
        return profileService.getProfile(id);
    }
    
    @GetMapping("/{id}/bookings")
    public List<Booking> getBookings(@PathVariable int id) {
        return profileService.getBookings(id);
    }
}