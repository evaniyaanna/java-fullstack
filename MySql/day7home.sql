CREATE TABLE `online_store`.`users` (`id` INT(15) NOT NULL AUTO_INCREMENT , `name` VARCHAR(30) NOT NULL , `city` VARCHAR(30) NOT NULL , `score` INT(15) NOT NULL , `bonus` INT(20) NULL , `challenge` VARCHAR(20) NOT NULL , PRIMARY KEY (`id`)) ENGINE = InnoDB;

INSERT INTO users(id,name,city,score,bonus,challenge)VALUES
(1, 'Raj',   'Chennai', 88, 5,    'Fitness'),
(2, 'Anu',   'Mumbai',  91, NULL, 'Diet'),
(3, 'Ravi',  'Chennai', 78, 3,    'Fitness'),
(4, 'Meena', 'Delhi',   82, NULL, 'Diet'),
(5, 'Farah', 'Mumbai',  95, 4,    'Fitness'),
(6, 'Kiran', 'Pune',    70, NULL, 'Yoga'),
(7, 'Latha', 'Pune',    87, NULL, 'Fitness');

SELECT*FROM users
WHERE score>(SELECT AVG(score)
             FROM users);

SELECT name FROM users
WHERE challenge =(SELECT challenge
                  FROM users
                  WHERE name='Farah');




