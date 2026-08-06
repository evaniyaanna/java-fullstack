CREATE TABLE `online_store`.`student` (`id` INT(15) NOT NULL AUTO_INCREMENT , `name` VARCHAR(20) NOT NULL , `course` VARCHAR(20) NOT NULL , `fees_paid` INT(15) NOT NULL , `status` TEXT NOT NULL , PRIMARY KEY (`id`)) ENGINE = InnoDB;

INSERT INTO student(id,name,course,fees_paid,status)
VALUES(1, 'Alice', 'Web Development', 5000, 'Inactive'),
(2, 'Bob', 'Data Science', 7000, 'Inactive'),
(3, 'Charlie', 'UI/UX Design', 4000, 'Active');

SELECT* FROM student
WHERE fees_paid>5000;

UPDATE student
set status="active"
WHERE course="web development";

UPDATE student
set fees_paid=fees_paid+1000
WHERE course="data science";

UPDATE student
SET status="inactive",fees_paid=fees_paid-500
WHERE id=3;

DELETE from student
WHERE id =2;

DELETE FROM student
WHERE status="inactive";