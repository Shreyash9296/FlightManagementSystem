package model;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import lombok.Data;

@Entity
@Data
public class Profile {
    @Id
    private int id;
    private String name;
    private String email;
    private String password;
    
    @OneToMany(mappedBy = "user")
    private List<Booking> bookings;
    
    public Profile(User user) {
        this.id = user.getId();
        this.name = user.getName();
        this.email = user.getEmail();
        this.password = user.getPassword();
    }
    
    public List<Booking> getBookings() {
        return bookings;
    }
}