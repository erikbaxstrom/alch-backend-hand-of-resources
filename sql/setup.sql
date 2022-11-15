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




DROP TABLE IF EXISTS locations;

create table locations (
	id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
	city VARCHAR(50),
	country VARCHAR(50)
);

insert into locations (city, country) values ('Oslo', 'Norway');
insert into locations (city, country) values ('Göteborg', 'Sweden');
insert into locations (city, country) values ('Petrovskaya', 'Russia');
insert into locations (city, country) values ('Jingling', 'China');
insert into locations (city, country) values ('Xiaozhang', 'China');








DROP TABLE IF EXISTS animals;

create table animals (
	id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
	common_name VARCHAR(50),
	scientific_name VARCHAR(50)
);
insert into animals (common_name, scientific_name) values ('Common zorro', 'Dusicyon thous');
insert into animals (common_name, scientific_name) values ('Lion, south american sea', 'Otaria flavescens');
insert into animals (common_name, scientific_name) values ('Collared peccary', 'Tayassu tajacu');
insert into animals (common_name, scientific_name) values ('Ground monitor (unidentified)', 'Varanus sp.');
insert into animals (common_name, scientific_name) values ('Seal, northern elephant', 'Mirounga angustirostris');
insert into animals (common_name, scientific_name) values ('Dove, white-winged', 'Zenaida asiatica');
insert into animals (common_name, scientific_name) values ('Grenadier, common', 'Uraeginthus granatina');
insert into animals (common_name, scientific_name) values ('Nyala', 'Tragelaphus angasi');
