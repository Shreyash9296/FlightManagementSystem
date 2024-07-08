package com.spring.service;
import com.spring.model.user;
import com.spring.repository.UserRepository;
import org.springframework.stereotype.Service;
import org.springframework.security.crypto.password.Password;
import org.springframework.beans.factory.annotation.Autowired;


public class UserService{
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public User save (User user){
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        return userRepository.save(user);
    }
    public user findByUsername(String username){
        return userRepository.findUsername(username);
    }
}