package com.example.library.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

import com.example.library.Models.Member;
import com.example.library.service.MemberService;

@Controller
public class MemberController {

    @Autowired
    private MemberService memberService;

    // Registration page
    @GetMapping("/registration")
    public String registrationPage(Model model) {

        model.addAttribute("member", new Member());

        return "register";
    }

    // Registration form submission
    @PostMapping("/registration")
    public String registerMember(
            @ModelAttribute("member") Member member,
            Model model) {

        if (memberService.emailExists(member.getEmail())) {

            model.addAttribute(
                    "error",
                    "Email already exists."
            );

            return "register";
        }

        memberService.registerMember(member);

        return "redirect:/welcome?name="
                + member.getName();
    }

    // Welcome page
    @GetMapping("/welcome")
    public String welcomePage(
            String name,
            Model model) {

        model.addAttribute("name", name);

        return "welcome";
    }
}