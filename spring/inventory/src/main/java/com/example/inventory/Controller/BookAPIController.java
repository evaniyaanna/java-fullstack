package com.example.inventory.Controller;

import com.example.inventory.Models.Book;
import com.example.inventory.Repository.BookRepository;
import com.example.inventory.exception.BookNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class BookAPIController {

    @Autowired
    private BookRepository bookRepository;


    // Add a new book
    @PostMapping("/addbook")
    public Book addBook(@RequestBody Book book) {

        return bookRepository.save(book);
    }


    // View all books
    @GetMapping("/listbook")
    public List<Book> listBook() {

        return bookRepository.findAll();
    }


    // View book by ID
    @GetMapping("/book/{id}")
    public Book getBook(@PathVariable Integer id) {

        return bookRepository.findById(id)
                .orElseThrow(() -> new BookNotFoundException(id));
    }


    // Update book by ID
    @PutMapping("/updatebook/{id}")
    public Book updateBook(
            @PathVariable Integer id,
            @RequestBody Book bookDetails) {

        Book book = bookRepository.findById(id)
                .orElseThrow(() -> new BookNotFoundException(id));

        book.setTitle(bookDetails.getTitle());
        book.setAuthor(bookDetails.getAuthor());
        book.setGenre(bookDetails.getGenre());
        book.setPrice(bookDetails.getPrice());
        book.setPublishedDate(bookDetails.getPublishedDate());

        return bookRepository.save(book);
    }


    // Delete book by ID
    @DeleteMapping("/deletebook/{id}")
    public ResponseEntity<?> deleteBook(@PathVariable Integer id) {

        Book book = bookRepository.findById(id)
                .orElseThrow(() -> new BookNotFoundException(id));

        bookRepository.delete(book);

        return ResponseEntity.ok("Book deleted successfully");
    }


    // Search books by title
    @GetMapping("/search")
    public List<Book> searchBook(
            @RequestParam String keyword) {

        return bookRepository.findByTitleContainingIgnoreCase(keyword);
    }
}