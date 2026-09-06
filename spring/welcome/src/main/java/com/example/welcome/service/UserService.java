package com.example.welcome.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.welcome.Models.User;
import com.example.welcome.Repository.UserRepository;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;


    @Autowired
    private PasswordEncoder passwordEncoder;


    public User registerUser(User user) {

        String encryptedPassword =
                passwordEncoder.encode(
                    user.getPassword()
                );

        user.setPassword(encryptedPassword);

        return userRepository.save(user);
    }


    public boolean usernameExists(
            String username) {

        return userRepository
                .existsByUsername(username);
    }


    public boolean phoneExists(
            String phone) {

        return userRepository
                .existsByPhone(phone);
    }
}