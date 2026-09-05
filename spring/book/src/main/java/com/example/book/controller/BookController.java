package com.example.book.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

import com.example.book.Models.BookModel;
import com.example.book.repository.BookRepository;

@Controller
public class BookController {

    @Autowired
    private BookRepository bookRepository;

    @GetMapping("/book_create")
    public String addBook(Model model) {

        model.addAttribute("message", "Enter the book details");

        return "book";
    }

    @PostMapping("/save_book")
    public String saveBook(BookModel book, Model model) {

        BookModel b = new BookModel();

        b.setTitle(book.getTitle());
        b.setAuthor(book.getAuthor());
        b.setPrice(book.getPrice());

        bookRepository.save(b);

        model.addAttribute(
                "message",
                "The book " + book.getTitle()
                        + " is saved successfully"
        );

        return "book";
    }

    @GetMapping("/books")
    public String showBooks(Model model) {

        Iterable<BookModel> bookList = bookRepository.findAll();

        model.addAttribute("books", bookList);

        return "books";
    }
}