CREATE TABLE `online_store`.`students` (`id` INT(15) NOT NULL AUTO_INCREMENT , `name` VARCHAR(20) NOT NULL , `course` VARCHAR(20) NOT NULL , `score` INT(20) NOT NULL , `email` VARCHAR(30) NOT NULL , `phone` VARCHAR(30) NOT NULL , `city` VARCHAR(30) NOT NULL , `bonus_points` INT(20)  NULL , PRIMARY KEY (`id`)) ENGINE = InnoDB;

INSERT INTO students VALUES(1, 'Asha', 'Python', 85, 'asha@mail.com', '9876543210', 'Chennai', 5), (2, 'Ravi', 'Python', 90, 'ravi@mail.com', '9876543211', 'Chennai', NULL), (3, 'Sneha', 'Java', 78, 'sneha@mail.com', '9876543212', 'Mumbai', NULL), (4, 'Karan', 'Java', 88, 'karan@mail.com', '9876543213', 'Delhi', 2), (5, 'Divya', 'Python', 95, 'divya@mail.com', '9876543214', 'Mumbai', 4), (6, 'Manoj', 'JavaScript', 72, 'manoj@mail.com', '9876543215', 'Delhi', NULL);

SELECT course,COUNT(course) AS 'no of students'
FROM students
GROUP BY course;

SELECT course,AVG(score)AS avg_score
FROM students
GROUP BY course
HAVING AVG(score)>80;

SELECT name,score
FROM students
WHERE city IN('Chennai','Mumbai');

SELECT* FROM students
WHERE bonus_points IS NULL;

SELECT name
FROM students
WHERE city='chennai'
UNION
SELECT name
FROM students
WHERE city='mumbai';