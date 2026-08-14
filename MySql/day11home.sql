CREATE TABLE category(category_id INT PRIMARY KEY AUTO_INCREMENT,
                      name VARCHAR(30));

CREATE TABLE book1(book_id INT AUTO_INCREMENT PRIMARY KEY,
                   book_name VARCHAR(30),
                   category_id INT,
                   FOREIGN KEY(category_id) REFERENCES category(category_id));

CREATE INDEX ind ON book1(book_name);

SHOW INDEX FROM book1;