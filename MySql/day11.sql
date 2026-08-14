CREATE TABLE author(author_id INT PRIMARY KEY AUTO_INCREMENT,
                    name VARCHAR(30));

CREATE TABLE book(book_id INT PRIMARY KEY AUTO_INCREMENT,
                  title VARCHAR(30),
                  author_id INT,
                  FOREIGN KEY(author_id)REFERENCES author(author_id));

CREATE INDEX indx ON book(author_id);
