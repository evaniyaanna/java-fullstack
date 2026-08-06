CREATE TABLE `online_store`.`books1` (`id` INT(15) NOT NULL , `title` VARCHAR(20) NOT NULL , `author` VARCHAR(20) NOT NULL , `price` INT(15) NOT NULL , `stock_status` VARCHAR(20) NOT NULL , `genre` VARCHAR(20) NOT NULL ) ENGINE = InnoDB;

INSERT INTO books1(id, title, author, price, stock_status, genre)
VALUES(1, 'The Great Gatsby', 'F. Scott Fitzgerald', 500, 'In Stock', 'Fiction'),
(2, 'A Brief History of Time', 'Stephen Hawking', 750, 'In Stock', 'Science'),
(3, 'Sapiens', 'Yuval Noah Harari', 850, 'Out of Stock', 'History'),
(4, 'The Alchemist', 'Paulo Coelho', 350, 'In Stock', 'Fiction'),
(5, 'Atomic Habits', 'James Clear', 650, 'Out of Stock', 'Self Help');

SELECT DISTINCT genre
FROM books1;

SELECT * FROM books1
WHERE stock_status = 'In Stock'
AND price < 400;

SELECT*FROM books1 
WHERE stock_status="out of stock"OR price>700;

SELECT title,price,price*1.10 AS newprice
FROM books1;

SELECT title,price,stock_status
FROM books1
ORDER BY price DESC;