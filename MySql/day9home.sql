CREATE TABLE `library`.`department` (`emp_id` INT(10) NOT NULL AUTO_INCREMENT , `department_name` VARCHAR(15) NOT NULL , PRIMARY KEY (`emp_id`)) ENGINE = InnoDB;

CREATE TABLE `library`.`department` (`emp_id` INT(10) NOT NULL AUTO_INCREMENT , `department_name` VARCHAR(15) NOT NULL , PRIMARY KEY (`emp_id`)) ENGINE = InnoDB;

INSERT INTO employees (id, name)
VALUES
(1, 'Anjali'),
(2, 'Rohan'),
(3, 'Meena');

INSERT INTO department (emp_id, department_name)
VALUES
(1, 'HR'),
(2, 'IT'),
(4, 'Finance');

SELECT employees.name,department.department_name
FROM employees
LEFT JOIN department
ON employees.id=department.emp_id

SELECT employees.name,department.department_name
FROM employees
INNER JOIN department
ON employees.id=department.emp_id

SELECT department.department_name, employees.name
FROM department
LEFT JOIN employees
ON employees.id=department.emp_id;
