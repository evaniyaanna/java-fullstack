package com.example.book.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.book.Models.BookModel;

public interface BookRepository extends JpaRepository<BookModel, Integer> {

}