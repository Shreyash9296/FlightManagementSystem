package repository;
import java.util.Optional;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import model.User;
@Repository
public interface UserRepository extends JpaRepository<User,Integer> {

	boolean exists(String email);

	boolean existByEmail(String email);
	
	Optional <User> findByEmail(String email);
		
	



}
