package com.spring.repository;

import com.spring.model.user;
import org.springFramework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<user , Long>{
    user findByUsername(String username);
}