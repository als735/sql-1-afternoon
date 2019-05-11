//TABLE PERSON SECTION 
// -- CREATE TABLE person ( person_id SERIAL, name VARCHAR(200), age INTEGER, height INTEGER, city VARCHAR(200), favorite_color VARCHAR(200) );
// -- INSERT INTO person (name, age, height, city, favorite_color ) 
// -- VALUES ( 'Hillary Brown', 26, 64, 'Provo', 'Pink' );
// -- SELECT * FROM person

// -- SELECT * FROM person ORDER BY height DESC; 
// -- SELECT * FROM person ORDER BY height ASC; 
// -- SELECT * FROM person ORDER BY age DESC; 
// -- SELECT * FROM person WHERE age > 20; 
// -- SELECT * FROM person WHERE age = 18; 
// -- SELECT * FROM person WHERE age < 20 or age > 30; 
// -- SELECT * FROM person WHERE age != 27; 
// -- SELECT * FROM person WHERE favorite_color != 'red'; 
// -- SELECT * FROM person WHERE favorite_color != 'Red' AND favorite_color != 'Blue'; 
// -- SELECT * FROM person WHERE favorite_color = 'Orange' OR favorite_color = 'GREEN'; 
// -- SELECT * FROM person WHERE favorite_color IN ('Orange', 'Green', 'Blue');
// -- SELECT * FROM person WHERE favorite_color IN ('Yellow', 'Purple'); 

// TABLE ORDERS SECTION 

// -- CREATE TABLE orders ( person_id SERIAL, product_name VARCHAR(200), product_price NUMERIC, quantity INTEGER );
// -- INSERT INTO orders (product_name, product_price, quantity ) 
// -- VALUES ('Burger', 8.50, 1 );
// -- SELECT * FROM orders; 
// -- SELECT SUM(quantity) FROM orders; 
// -- SELECT SUM(product_price * quantity) FROM orders; 
// -- SELECT SUM(product_price * quantity) FROM orders WHERE person_id = 2; 

//TABLE ARTIST 

// INSERT INTO artist (name) 
// -- VALUES ('The Zel'); 

// -- SELECT * FROM artist ORDER BY name DESC LIMIT 10; 

// -- SELECT * FROM artist ORDER BY name ASC LIMIT 5;

// -- SELECT * FROM artist WHERE name LIKE 'BLACK%'; 

// -- SELECT * FROM artist WHERE name LIKE '%Black%';

// TABLE EMPLOYEE 

// -- SELECT first_name, last_name FROM employee WHERE city = 'Calgary'; 
// -- SELECT MAX(birth_date) from employee; 
// -- SELECT MIN(birth_date) from employee; 
// -- SELECT * FROM employee; 
// -- SELECT * FROM employee WHERE reports_to = 2; 
// -- SELECT COUNT(*) FROM employee WHERE city = 'Lethbridge'; 




//TABLE INVOICE 
// -- SELECT COUNT(*) FROM invoice WHERE billing_country = 'USA'; 
// -- SELECT MAX(total) FROM invoice; 
// -- SELECT MIN(total) FROM invoice; 
// -- SELECT * FROM invoice WHERE total > 5; 
// -- SELECT count(*) FROM invoice WHERE total < 5; 
// -- SELECT count(*) FROM invoice WHERE billing_state in ('CA', 'TX', 'AZ'); 
// -- SELECT AVG(total) FROM invoice; 
// -- SELECT SUM(total) FROM invoice;