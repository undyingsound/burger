CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers(
	id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    burger_name VARCHAR(30) NOT NULL,
    devoured BOOLEAN DEFAULT false;

);

