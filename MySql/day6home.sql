CREATE TABLE `online_store`.`movies` (`id` INT(10) NOT NULL AUTO_INCREMENT , `title` VARCHAR(30) NOT NULL , `genre` VARCHAR(30) NOT NULL , `release_year` INT(20) NOT NULL , `rating` DECIMAL(20) NOT NULL , `box_office` INT(20) NOT NULL , PRIMARY KEY (`id`)) ENGINE = InnoDB;

INSERT INTO movies(id,title,genre,release_year,rating,box_office)
VALUES(1, 'Inception', 'Sci-Fi', 2010, 8.8, 825),
(2, 'The Dark Knight', 'Action', 2008, 9.0, 1004),
(3, 'Interstellar', 'Sci-Fi', 2014, 8.6, 677),
(4, 'Joker', 'Drama', 2019, 8.4, 1074),
(5, 'Dunkirk', 'War', 2017, 7.9, 527);

SELECT title,box_office AS 'earnings(in cr)'
FROM movies;

SELECT title AS'Movie Title',genre AS category
FROM movies;

SELECT title,rating AS 'IMDb Score'
FROM movies
WHERE genre IN('Sci-Fi','action');

SELECT title,release_year AS 'release'
FROM movies
WHERE release_year BETWEEN 2008 AND 2015;

SELECT title,rating AS 'High Rated Movies'
FROM movies
WHERE rating>8.5;