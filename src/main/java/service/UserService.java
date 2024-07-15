package service;

import java.util.ArrayList;

import java.util.Collections;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import exception.UserAlreadyExistsException;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import model.Role;
import model.User;
import repository.UserRepository;

import model.User;

@Service
@RequiredArgsConstructor
public class UserService {

	@Autowired
	UserRepository userRepository;
	private PasswordEncoder passwordEncoder;

	public User registerUser(User user) {
		if (userRepository.existByEmail(user.getEmail())) {
			throw new UserAlreadyExistsException(user.getEmail() + "already exists");
		}
		user.setPassword(passwordEncoder.encode(user.getPassword()));
		

		return userRepository.save(user);
	}

	public List<User> getUsers() {
		return userRepository.findAll();
	}



	public void createUser(User user) {
		userRepository.save(user);
	}

	// delete a specific record
	@Transactional
	public void deleteUserById(int id) {
		userRepository.deleteById(id);
	}

	public User getUser(String email) {
		return userRepository.findByEmail(email).orElseThrow(() -> new UsernameNotFoundException("User Not Found"));
	}

	public User getUserById(int id) {
		
		
		return null;
	}



}
