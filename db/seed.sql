CREATE TABLE fsi_webinar_clients (
id SERIAL PRIMARY KEY,
first_name VARCHAR (250),
last_name VARCHAR (250),
phone VARCHAR (30),
email VARCHAR (150),
webinar_id INT,
schedule VARCHAR,
presenter VARCHAR,
yrs_to_retire VARCHAR,
investable_assets VARCHAR,
focus TEXT[],
comments VARCHAR,
registration_date TIMESTAMPTZ DEFAULT NOW()
);

-- Breaking up the FOCUS array
SELECT x.*
FROM(SELECT first_name, unnest(focus) as webinar_focus from fsi_webinar_attendees WHERE presenter='Nathan Gates')x 

-- Case insensative query
Select * from fsi_webinar_attendees
WHERE LOWER(presenter) = LOWER('Nathan Gates')