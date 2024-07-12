package com.spring.service;


import java.util.ArrayList;
import java.util.List;

import com.spring.model.User;
import com.spring.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    UserRepository userRepository;


    public List <User> getAllUsers()
    {
       return userRepository.findAll();
    }


    public User getUserById(int id)
    {
        return userRepository.findById(id).get();

    }

    public void createUser(User  user)
    {
        userRepository.save(user);
    }
    //delete a specific record

    public void deleteUserById(int id)
    {
        userRepository.deleteById(id);
    }
}