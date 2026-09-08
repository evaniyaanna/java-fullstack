package com.example.apireg.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.apireg.Models.User;

public interface UserRepository extends JpaRepository<User, Long> {

    User findByEmail(String email);

}