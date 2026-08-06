CREATE TABLE `student`.`student` (`id` INT(15) NOT NULL AUTO_INCREMENT , `name` VARCHAR(20) NOT NULL , `age` INT(25) NOT NULL , `department` VARCHAR(25) NOT NULL , `grade` INT(15) NOT NULL , PRIMARY KEY (`id`)) ENGINE = InnoDB;

INSERT INTO student (id, name, age, department, grade)
VALUES
(1, 'Rahul', 21, 'Computer Science', 90),
(2, 'Anjali', 19, 'Physics', 85),
(3, 'Karan', 22, 'Mathematics', 75),
(4, 'Priya', 20, 'Computer Science', 68);

SELECT* FROM student
WHERE age>20;

SELECT* FROM student
WHERE department="computer science" OR department="physics";

SELECT*FROM student
WHERE grade="90";

SELECT*FROM student
WHERE grade BETWEEN 70 AND 90;