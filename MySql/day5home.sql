CREATE TABLE `online_store`.`books3` (`id` INT(15) NOT NULL , `title` VARCHAR(30) NOT NULL , `author` VARCHAR(30) NOT NULL , `price` INT(15) NOT NULL , `stock` INT(20) NOT NULL ) ENGINE = InnoDB;

INSERT into books3(id,title,author,price,stock) VALUES(1, 'The Alchemist', 'Paulo Coelho', 350, 50),
(2, 'Atomic Habits', 'James Clear', 450, 40),
(3, 'The Psychology of Money', 'Morgan Housel', 400, 30),
(4, 'Ikigai', 'Francesc Miralles', 300, 60),
(5, 'Deep Work', 'Cal Newport', 500, 20);

SELECT* FROM books3
WHERE price<450 OR stock>30;

UPDATE books3
SET stock =45,price=420
WHERE title='Deep Work';

DELETE FROM books3 
WHERE title= 'Ikigai';

SELECT AVG(price)AS avg_price,COUNT(id)AS no_of_books
FROM books3;

SELECT * FROM books3 
ORDER BY price DESC
LIMIT 3;