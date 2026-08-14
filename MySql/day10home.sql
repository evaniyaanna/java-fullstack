CREATE TABLE authors(author_id INT,
                     author_name VARCHAR(20),
                     email VARCHAR(30),
                     UNIQUE(author_id,email));

CREATE TABLE books2(book_id INT PRIMARY KEY,
                    book_title VARCHAR(30),
                    author_id INT,
                    FOREIGN KEY (author_id)REFERENCES authors(author_id));
                    