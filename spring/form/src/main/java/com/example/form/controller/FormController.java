package com.example.form.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.Map;

@Controller
public class FormController {

    @GetMapping("/form")
    public String showForm() {
        return "form";
    }

    @GetMapping("/result")
    public String showResult(
            @RequestParam("username") String username,
            @RequestParam Map<String, String> formData,
            Model model) {

        model.addAttribute("username", username);
        model.addAttribute("formData", formData);

        return "result";
    }
}