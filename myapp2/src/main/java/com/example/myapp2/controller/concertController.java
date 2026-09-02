package com.example.myapp2.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.stereotype.Controller;


@Controller
public class concertController {

    @GetMapping("/concert")
    public String concert() {
        return "concert";
    }
}
