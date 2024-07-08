package com.spring.login.repository;

import com.spring.login.model.user;
import org.springFramework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<user , Long>{
    user findByUsername(String username);
}