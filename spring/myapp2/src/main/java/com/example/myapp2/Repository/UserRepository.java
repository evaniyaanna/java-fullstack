package com.example.myapp2.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.myapp2.Models.User;

public interface UserRepository extends JpaRepository<User, Long> {
    User findByEmail(String email);
    User findByToken(String token);
    boolean existsByToken(String token);
}