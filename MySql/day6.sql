CREATE TABLE `online_store`.`books2` (`id` INT(15) NOT NULL AUTO_INCREMENT , `title` VARCHAR(30) NOT NULL , `author` VARCHAR(30) NOT NULL , `genre` VARCHAR(30) NOT NULL , `price` DECIMAL(15) NOT NULL , `copies_sold` INT(15) NOT NULL , PRIMARY KEY (`id`)) ENGINE = InnoDB;

CREATE TABLE `online_store`.`best_seller` (`id` INT(15) NOT NULL AUTO_INCREMENT , `title` VARCHAR(30) NOT NULL , `author` VARCHAR(30) NOT NULL , `genre` VARCHAR(30) NOT NULL , `price` DECIMAL(15) NOT NULL , `copies_sold` INT(15) NOT NULL , PRIMARY KEY (`id`)) ENGINE = InnoDB;

INSERT INTO books2(id,title,author,genre,price,copies_sold)
VALUES(1, 'The Silent Patient', 'Alex Michaelides', 'Thriller', 399.00, 1200),
(2, 'Atomic Habits', 'James Clear', 'Self-help', 499.00, 2000),
(3, 'The Psychology of Money', 'Morgan Housel', 'Finance', 350.00, 1800);

INSERT INTO best_seller(id,title,author,genre,price,copies_sold)
VALUES(4, 'Ikigai', 'Francesc Miralles', 'Philosophy', 300.00, 2500),
(5, 'Think Like a Monk', 'Jay Shetty', 'Self-help', 450.00, 2200);

SELECT title,author
FROM books2
UNION
SELECT title,author
FROM best_seller;

SELECT* FROM books2
WHERE price> 400;

SELECT AVG(price)
FROM books2;

SELECT COUNT(id)
FROM books2;

SELECT title AS 'book title',author AS 'Written By'
FROM books2

