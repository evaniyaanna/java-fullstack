package com.example.welcome.controller;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.security.core.Authentication;

import org.springframework.stereotype.Controller;

import org.springframework.ui.Model;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;

import org.springframework.web.bind.annotation.PostMapping;

import com.example.welcome.Models.User;
import com.example.welcome.service.UserService;


@Controller
public class UserController {


    @Autowired
    private UserService userService;


    // Registration page
    @GetMapping("/registration")
    public String registrationPage(
            Model model) {

        model.addAttribute(
            "user",
            new User()
        );

        return "register";
    }


    // Register user
    @PostMapping("/registration")
    public String registerUser(
            @ModelAttribute("user") User user,
            Model model) {


        if (userService.usernameExists(
                user.getUsername())) {

            model.addAttribute(
                "error",
                "Username already exists."
            );

            return "register";
        }


        if (userService.phoneExists(
                user.getPhone())) {

            model.addAttribute(
                "error",
                "Phone number already exists."
            );

            return "register";
        }


        userService.registerUser(user);


        return "redirect:/login?registered";
    }


    // Login page
    @GetMapping("/login")
    public String loginPage() {

        return "login";
    }


    // Welcome page
    @GetMapping("/welcome")
    public String welcomePage(
            Authentication authentication,
            Model model) {


        model.addAttribute(
            "username",
            authentication.getName()
        );


        return "welcome";
    }
}