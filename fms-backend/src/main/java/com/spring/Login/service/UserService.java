package com.spring.login.service;
import com.spring.login.model.user;
import com.spring.login.repository.UserRepository;
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