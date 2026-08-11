INSERT INTO mobile_store(id,brand,model,price,stock)
VALUES(1, 'Samsung', 'Galaxy M14', 12000, 30),
(2, 'Redmi', 'Note 12', 15000, 25),
(3, 'Realme', 'Narzo 50', 13000, 20),
(4, 'Samsung', 'Galaxy A23', 18000, 10);

SELECT*FROM mobile_store
WHERE price>13000 OR stock<15;

UPDATE mobile_store
SET stock=stock+5 , price=12500
WHERE model= 'Narzo 50';

DELETE FROM mobile_store
WHERE id=2;

SELECT MAX(price)AS maximun_price , MIN(price)AS minimum_price
FROM mobile_store;

SELECT SUM(stock)
FROM mobile_store

SELECT* FROM mobile_store
ORDER BY price DESC
LIMIT 2;