package com.spring.controller;

import java.util.List;
import com.spring.model.User;
import com.spring.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping("/user")
    private List<User> getAllUser() {
        return userService.getAllUsers();

    }

    @GetMapping("/user/{id}")
    private User getUserById(@PathVariable("id") int id) {
        return userService.getUserById(id);
    }

    @PostMapping("/user/register")
    public ResponseEntity<String> createUser(@RequestBody User user) {
        try {
            userService.createUser(user);
            return ResponseEntity.ok("User registered successfully");
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Error registering user");
        }
    }
    @PostMapping("/user/login")
    public ResponseEntity<String> login(@RequestBody User user) {
        try {
            User authenticatedUser = userService.authenticateUser(user.getEmail(), user.getPassword());
            if (authenticatedUser != null) {

                return ResponseEntity.ok("Login successfull");
            } else {
                return ResponseEntity.badRequest().body("Invalid email or password");
            }
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Error logging in");
        }
    }

//    private String generateJwtToken(User user) {
//        // Generate JWT token using user's email and password
//        // Return the token as a string
//    }

    @DeleteMapping("/user/{id}")

    private void deleteUserById(@PathVariable("id") int id) {
        userService.deleteUserById(id);
    }


}




    /*
     * @RequestMapping("/insert") public String index() {
     *
     * jdbc.execute("insert into user(name,email) values('Manisha','m@gmail.com')");
     *
     * return "Row inserted successfully"; }
     */
