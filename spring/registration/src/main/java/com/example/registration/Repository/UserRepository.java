package com.example.registration.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.registration.Models.User;

public interface UserRepository extends JpaRepository<User, Long> {

    User findByEmail(String email);

    User findByMobile(String mobile);
}