package controller;


import java.util.List;

import model.User;
import service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
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
    private List<User> getAllUser()
    {
        return userService.getUsers();

    }

    @GetMapping("/user/{id}")
    private User getUserById(@PathVariable("id") int id)
    {
        return userService.getUserById(id);
    }

    @PostMapping("/user")
    private int createUser(@RequestBody User user)
    {
        userService.createUser(user);
        return user.getId();
    }

    @DeleteMapping("/user/{id}")

    private void deleteUserById(@PathVariable ("id") int id)
    {
        userService.deleteUserById(id);
    }







    /*
     * @RequestMapping("/insert") public String index() {
     *
     * jdbc.execute("insert into user(name,email) values('Manisha','m@gmail.com')");
     *
     * return "Row inserted successfully"; }
     */

}
