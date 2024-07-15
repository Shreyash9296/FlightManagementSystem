package controller;
import org.springframework.http.HttpStatus;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import exception.UserAlreadyExistsException;
import model.User;
import service.UserService;
@RestController
public class AuthController {
	private UserService userService;
	@PostMapping("/register-user")
	public ResponseEntity<?> registerUser(User user){
		try {
			userService.registerUser(user);
			return ResponseEntity.ok("Registration Successfull");
			
		}
		catch(UserAlreadyExistsException e){
			return ResponseEntity.status(HttpStatus.CONFLICT).body(e.getMessage());
			
		}
		
	}

}
