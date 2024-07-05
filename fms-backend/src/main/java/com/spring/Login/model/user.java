package com.spring.login.model;

import javax.persistence.*;

@Entity
@Table(name="users")
public class user{
    @id
    private long id;
    private string username;
    private string password;
    private string email;

    public string getUsername(){
        this.username =username;
    }
    public string getPassword(){
        return password;
    }
    public void setPassword(String password){
        this.password= password;

    }
    public string getEmail(){
        return email;
    }

    public void setEmail(string email) {
        this.email = email;
    }
}
