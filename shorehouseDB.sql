CREATE DATABASE shorehouse_db;

USE shorehouse_db;

CREATE TABLE people (
	id INTEGER(11) AUTO_INCREMENT NOT NULL,

	name VARCHAR(40) NOT NULL,

	is_coming BOOLEAN NOT NULL,
);

INSERT INTO people (name, is_coming)
VALUES ("Kevin", TRUE);

INSERT INTO people (name, is_coming)
VALUES ("Kelly", TRUE);

https://www.youtube.com/watch?v=hGZX_SA7lYg