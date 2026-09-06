package com.example.mobile.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

import com.example.mobile.Models.Mobile;
import com.example.mobile.Repository.MobileRepository;

@Controller
public class MobileController {

    @Autowired
    private MobileRepository mobileRepository;

    // Display form
    @GetMapping("/mobile_create")
    public String addMobile(Model model) {

        model.addAttribute("message",
                "Enter the mobile phone details");

        return "mobile";
    }

    // Save mobile details
    @PostMapping("/save_mobile")
    public String saveMobile(Mobile mobile, Model model) {

        Mobile m = new Mobile();

        m.setName(mobile.getName());
        m.setBrand(mobile.getBrand());
        m.setPrice(mobile.getPrice());
        m.setType(mobile.getType());

        mobileRepository.save(m);

        model.addAttribute("message",
                "The mobile " + mobile.getName()
                + " is saved successfully");

        return "mobile";
    }

    // Display data
    @GetMapping("/mobiles")
    public String showMobiles(Model model) {

        // Custom Query 1
        Iterable<Object[]> allPhones =
                mobileRepository.getAllNamesAndPrices();

        // Custom Query 2
        Iterable<Mobile> cheapPhones =
                mobileRepository.getPhonesBelow20000();

        // Custom Query 3
        Iterable<Object[]> phoneCount =
                mobileRepository.getPhoneCountByType();

        model.addAttribute("allPhones", allPhones);
        model.addAttribute("cheapPhones", cheapPhones);
        model.addAttribute("phoneCount", phoneCount);

        return "mobiles";
    }
}