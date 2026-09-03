package com.example.myapp2.controller;


import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class movieController {

    @GetMapping("/movie")
    public String movie(Model model) {

        String movieTitle = "The Dark Knight";

        String movieDescription =
                "Batman faces a dangerous criminal who creates chaos in Gotham City.\n" +
                "He must protect the city while dealing with one of his greatest enemies.";

        boolean isLoggedIn = false;

        model.addAttribute("movieTitle", movieTitle);
        model.addAttribute("movieDescription", movieDescription);
        model.addAttribute("isLoggedIn", isLoggedIn);

        return "movie";
    }
}