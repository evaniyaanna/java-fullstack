CREATE TABLE `online_store`.`books` (`book_id` INT(15) NOT NULL AUTO_INCREMENT , `title` VARCHAR(20) NOT NULL , `author` VARCHAR(20) NOT NULL , `price` INT(15) NOT NULL , `stock` INT(20) NOT NULL , PRIMARY KEY (`book_id`)) ENGINE = InnoDB;

INSERT INTO books(book_id,title,author,price,stock) VALUES(1, 'Learn SQL', 'John Smith', 400, 10), (2, 'Mastering Python', 'Jane Doe', 600, 5), (3, 'HTML & CSS Basics', 'Alan Webb', 300, 8);

UPDATE books
SET price=price+50,stock=12
WHERE title="Learn SQL";

UPDATE books
SET stock=stock-2
WHERE price>500;

DELETE FROM books
WHERE book_id=3;