CREATE TABLE `online_store`.`product` (`id` INT(10) NOT NULL AUTO_INCREMENT , `name` VARCHAR(20) NOT NULL , `category` VARCHAR(20) NOT NULL , `price` INT(10) NOT NULL , `in_stock` VARCHAR(10) NOT NULL , PRIMARY KEY (`id`)) ENGINE = InnoDB;

INSERT INTO product(id,name,category,price,in_stock) VALUES(1, 'Laptop', 'Electronics', 55000, 'Yes'), (2, 'Notebook', 'Stationery', 120, 'Yes'), (3, 'Office Chair', 'Furniture', 4500, 'No'), (4, 'Calculator', 'Electronics', 350, 'Yes'), (5, 'Mobile Phone', 'Electronics', 18000, 'No');

SELECT DISTINCT category
FROM product;

SELECT*FROM product
WHERE in_stock="yes"AND price<500;

SELECT*FROM product
WHERE in_stock="no"OR price>1000;

SELECT name,price*1.18 AS  price_with_tax
FROM product;

