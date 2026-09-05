package com.example.dish.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@Controller
public class DishController {

    @GetMapping("/dish/{name}/{price}")
    public String showDish(
            @PathVariable String name,
            @PathVariable Double price,
            Model model) {

        model.addAttribute("name", name);
        model.addAttribute("price", price);

        return "dish";
    }
}