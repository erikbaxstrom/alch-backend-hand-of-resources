-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`

DROP TABLE IF EXISTS people;

create table people (
	id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
	first_name VARCHAR(50),
	last_name VARCHAR(50)
);
insert into people (first_name, last_name) values ('Rod', 'Huntar');
insert into people (first_name, last_name) values ('Cole', 'Benediktsson');
insert into people (first_name, last_name) values ('Darb', 'Hubbert');
insert into people (first_name, last_name) values ('Rafe', 'Killelea');
insert into people (first_name, last_name) values ('Jim', 'Hibling');






DROP TABLE IF EXISTS cars;

create table cars (
	id INT,
	vin VARCHAR(50),
	color VARCHAR(50)
);
insert into cars (id, vin, color) values (1, 'SCBFH7ZAXFC303594', 'Teal');
insert into cars (id, vin, color) values (2, '3GYFNBE32CS128208', 'Fuscia');
insert into cars (id, vin, color) values (3, '1N4AB7AP8EN952800', 'Orange');
insert into cars (id, vin, color) values (4, 'WBA6A0C55ED753888', 'Maroon');
insert into cars (id, vin, color) values (5, 'JTDJTUD31DD796795', 'Goldenrod');