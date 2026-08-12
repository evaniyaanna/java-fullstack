CREATE DATABASE BookStoreDB;

USE BookStoreDB;

CREATE TABLE authors (
    author_id INT PRIMARY KEY,
    name VARCHAR(100),
    country VARCHAR(100)
);

CREATE TABLE books (
    book_id INT PRIMARY KEY,
    title VARCHAR(200),
    price DECIMAL(10,2),
    author_id INT,
    FOREIGN KEY (author_id) REFERENCES authors(author_id)
);

ALTER TABLE books
ADD published_year INT;

DELETE FROM books;

DROP DATABASE BookStoreDB;