package com.spring.login.controller;
import com.spring.login.model.user;
import com.spring.login.service.UserService;
import org.sprignframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")

public class UserController{
    @Autowired
    private UserService userService;
    @PostMapping("/signup")
    public User signup(@RequestBody User user){
        return userService.save(user);
    }
    @PostMapping("/login")
    public User login(@RequestMapping User user){
        return userService.findByUsername(user.getUsername());
    }
}
