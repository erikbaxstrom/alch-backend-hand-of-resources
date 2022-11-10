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