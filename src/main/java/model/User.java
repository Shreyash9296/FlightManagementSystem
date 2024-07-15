package model;

import java.util.*;

import javax.persistence.*;

import lombok.*;
import model.Role;
@Entity
@Getter
@Setter
@NoArgsConstructor
@Table
public class User {
	 @Id
	 @GeneratedValue(strategy=GenerationType.IDENTITY)
	    @Column
	    private int id;
	    private String name;
	    private String email;
	    private String Password;
	    
	  
		@ManyToMany(fetch = FetchType.EAGER,cascade= {
	    		CascadeType.PERSIST, 
	    		CascadeType.MERGE,
	    		CascadeType.DETACH})
	    @JoinTable(name="user_roles",joinColumns = @JoinColumn(name="user_id",referencedColumnName="id"),
	    inverseJoinColumns = @JoinColumn(name= "role_id",referencedColumnName="id"))
	    private Collection<Role> roles = new HashSet<>();
	    

	    @GeneratedValue(strategy = GenerationType.AUTO)
	    public int getId() {
	        return id;
	    }
	    public void setId(int id) {this.id = id;}
	    public String getName() {
	        return name;
	    }
	    public void setName(String name) {
	        this.name = name;
	    }
	    public String getEmail() {
	        return email;
	    }
	    public void setEmail(String email) {
	        this.email = email;
	    }
		public Collection<Role> getRoles() {
			// TODO Auto-generated method stub
			return roles;
		}
		
		public void setPassword(String password) {
			Password = password;}
		
	    public String getPassword() {
			return Password;
		}
		public Collection<Role> setRoles(List<Role> list) {
			// TODO Auto-generated method stub
			return roles;
			
		}
		
		
		

}
