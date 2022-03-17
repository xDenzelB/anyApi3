-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`

DROP TABLE IF EXISTS candy;

CREATE TABLE candy (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name TEXT NOT NULL,
    type TEXT NOT NULL,
    quantity INT NOT NULL 
);

INSERT INTO 
candy (name, type, quantity)
VALUES
    ('sourpatch kids', 'sour', 2),
    ('snickers', 'chocolate', 4),
    ('starbursts', 'fruity', 1);