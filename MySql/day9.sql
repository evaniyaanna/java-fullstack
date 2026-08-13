CREATE TABLE `library`.`books1` (`book_id` INT(10) NOT NULL AUTO_INCREMENT , `title` VARCHAR(20) NOT NULL , PRIMARY KEY (`book_id`)) ENGINE = InnoDB;

CREATE TABLE `library`.`borrowers` (`borrower_id` INT(10) NOT NULL AUTO_INCREMENT , `name` VARCHAR(20) NOT NULL , `book_id` INT(10) NOT NULL , PRIMARY KEY (`borrower_id`)) ENGINE = InnoDB;

INSERT INTO books1(book_id,title)VALUES(1, 'The Alchemist'),
(2,'The Power of Now'),
(3,'Think and Grow Rich'),
(4,'Clean Code');

INSERT INTO borrowers (borrower_id, name, book_id)
VALUES
(101, 'Alice', 1),
(102, 'Bob', 2),
(103, 'Charlie', NULL);

SELECT borrowers.name,books1.title
FROM books1
LEFT JOIN borrowers ON books1.book_id=borrowers.book_id;

SELECT borrowers.name,books1.title
FROM books1
INNER JOIN  borrowers ON books1.book_id=borrowers.book_id;

SELECT books1.book_id,books1.title
FROM books1
LEFT JOIN borrowers
ON books1.book_id=borrowers.book_id
WHERE borrowers.book_id IS NULL ;

SELECT borrowers.name,books1.book_id,books1.title
FROM borrowers
LEFT JOIN books1 ON books1.book_id=borrowers.book_id;
