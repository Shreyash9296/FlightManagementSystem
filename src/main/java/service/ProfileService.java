package service;

import model.Booking;
import model.Profile;
import repository.ProfileRepository;

import java.util.List;

import org.springframework.stereotype.Service;
@Service
public class ProfileService {
    private final ProfileRepository profileRepository;
    
    public ProfileService(ProfileRepository profileRepository) {
        this.profileRepository = profileRepository;
    }
    
    public Profile getProfile(int id) {
        return profileRepository.findById(id).orElse(null);
    }
    
    public List<Booking> getBookings(int id) {
        Profile profile = getProfile(id);
        return profile.getBookings();
    }
}