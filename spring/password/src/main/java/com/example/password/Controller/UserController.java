package com.example.password.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

import com.example.password.Models.User;
import com.example.password.service.UserService;

@Controller
public class UserController {

    @Autowired
    private UserService userService;

    // Registration page
    @GetMapping("/registration")
    public String registrationPage(Model model) {

        model.addAttribute("user", new User());

        return "register";
    }

    // Registration form submission
    @PostMapping("/registration")
    public String registerUser(
            @ModelAttribute("user") User user,
            Model model) {

        if (userService.emailExists(user.getEmail())) {

            model.addAttribute(
                    "error",
                    "Email already exists."
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
                "email",
                authentication.getName()
        );

        return "welcome";
    }
}