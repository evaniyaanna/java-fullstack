package com.example.myapp2.controller;


import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class homeController {

    @GetMapping("/home")
    public String home(Model model) {

        String welcomeMessage = "Learning never stops. Keep growing, keep learning!";
        
        String headingMessage = "<h1>Hello from Spring Boot!</h1>";
        
        boolean isLoggedIn = true;

        model.addAttribute("welcomeMessage", welcomeMessage);
        model.addAttribute("headingMessage", headingMessage);
        model.addAttribute("isLoggedIn", isLoggedIn);

        return "home";
    }
}