package model;
import repository.UserRepository;
import javax.persistence.*;
import java.util.*;
import model.User;
import lombok.*;
@Entity
@Getter
@Setter
@NoArgsConstructor
@Table
public class Role {
	private UserRepository userRepository;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String name;
    @ManyToMany(mappedBy = "roles")
    private Collection<User> users = new HashSet<>();
    
    public Role(String name) {
    	this.name = name;
    }

    public void assignRoleToUser(User user) {
        user.getRoles().add(this);
        this.users.add(user);
    }

    public void removeUserFromRole(User user) {
        user.getRoles().remove(this);
        this.users.remove(user);
    }

    public String getName() {
        return name != null ? name : " ";
    }

	public List<User> getUser() {
		return userRepository.findAll();
	}

	
}