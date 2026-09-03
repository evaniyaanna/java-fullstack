package com.example.training.model;

import com.example.training.validation.Address;
import com.example.training.validation.GmailOnly;

import jakarta.validation.constraints.NotBlank;

public class Registration {

    @NotBlank(message = "Name must not be blank")
    private String name;

    @GmailOnly
    private String email;

    @Address
    private String address;

    public Registration() {
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }
}