package com.example.welcome.Models;

import jakarta.persistence.*;

@Entity
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(unique = true, nullable = false)
    private String username;

    @Column(unique = true, nullable = false)
    private String phone;

    @Column(nullable = false)
    private String password;


    public User() {

    }


    public User(
            String username,
            String phone,
            String password) {

        this.username = username;
        this.phone = phone;
        this.password = password;
    }


    public Long getId() {

        return id;
    }


    public void setId(Long id) {

        this.id = id;
    }


    public String getUsername() {

        return username;
    }


    public void setUsername(String username) {

        this.username = username;
    }


    public String getPhone() {

        return phone;
    }


    public void setPhone(String phone) {

        this.phone = phone;
    }


    public String getPassword() {

        return password;
    }


    public void setPassword(String password) {

        this.password = password;
    }
}