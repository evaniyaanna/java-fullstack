package com.example.myapp2.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class PortfolioController {

    @GetMapping("/start")
    public String start() {
        return "redirect:/portfolio";
    }

    @GetMapping("/portfolio")
    public String portfolio() {
        return "portfolio";
    }
}
