CREATE TABLE fsi_webinar_responses (
id SERIAL PRIMARY KEY,
webinar_id INT,
schedule INT,
yrs_to_retire VARCHAR,
focus TEXT[],
comments VARCHAR
);