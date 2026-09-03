package com.example.bookstore.controller;

import com.example.bookstore.model.Book;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class BookController {

    @GetMapping("/home")
    public String home() {
        return "home";
    }

    @GetMapping("/books")
    public String books(Model model) {

        Book book = new Book(
                "The Alchemist",
                "Paulo Coelho",
                399.0
        );

        model.addAttribute("book", book);

        return "books";
    }
}