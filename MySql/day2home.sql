CREATE TABLE `library`.`books` (`id` INT(15) NOT NULL , `title` VARCHAR(20) NOT NULL , `author` VARCHAR(20) NOT NULL , `price` INT(10) NOT NULL , `genre` VARCHAR(20) NOT NULL ) ENGINE = InnoDB;

INSERT INTO books(id,title,author,price,genre)
VALUES(1, 'The Great Gatsby', 'F. Scott Fitzgerald', 500, 'Fiction'),
(2, 'A Brief History of Time', 'Stephen Hawking', 650, 'Science'),
(3, 'The Da Vinci Code', 'Dan Brown', 450, 'Mystery'),
(4, 'Sapiens', 'Yuval Noah Harari', 700, 'History'),
(5, 'Harry Potter', 'J. K. Rowling', 350, 'Fantasy');

SELECT*FROM books
WHERE price>400;

SELECT*FROM books
WHERE genre="history"OR genre="science"OR genre="fiction";

SELECT*FROM books
WHERE title="The Great Gatsby";

SELECT*FROM books
WHERE author!="Dan Brown";