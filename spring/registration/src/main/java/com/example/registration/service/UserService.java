package com.example.registration.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.registration.Models.User;
import com.example.registration.Repository.UserRepository;
import com.example.registration.dto.UserDto;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public User save(UserDto userDto) {

        User user = new User();

        user.setFullname(userDto.getFullname());
        user.setMobile(userDto.getMobile());
        user.setEmail(userDto.getEmail());

        // Encrypt password
        user.setPassword(
            passwordEncoder.encode(userDto.getPassword())
        );

        return userRepository.save(user);
    }
}