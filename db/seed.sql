CREATE TABLE fsi_webinar_attendees (
id SERIAL PRIMARY KEY,
first_name VARCHAR (250),
last_name VARCHAR (250),
phone VARCHAR (30),
email VARCHAR (150),
webinar_id INT,
schedule INT,
presenter VARCHAR,
yrs_to_retire VARCHAR,
focus TEXT[],
comments VARCHAR
);