-- Delete existing database and create new one
DROP DATABASE IF EXISTS words_dev;

CREATE DATABASE words_dev;

-- Make sure we're using our `blog` database
\c words_dev;

CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  first_name VARCHAR NOT NULL,
  last_name VARCHAR NOT NULL,
  username VARCHAR UNIQUE NOT NULL,
  password_hash VARCHAR NOT NULL,
  email VARCHAR UNIQUE NOT NULL,
  location VARCHAR,
  bio VARCHAR,
  -- TODO add blogs and posts
  created_at TIMESTAMP NOT NULL,
  updated_at TIMESTAMP NOT NULL
);

INSERT INTO users (first_name, last_name, username, password_hash, email, created_at, updated_at) VALUES ("Jonny", "Dog", "jonnythedog", "aunfwiouefoijwef", "example@example.com", "2022-02-15T10:38:10.304Z", "2022-02-15T10:38:10.304Z")


-- CREATE TABLE IF NOT EXISTS post (
--   id SERIAL PRIMARY KEY,
--   userId INTEGER REFERENCES user(id),
--   title VARCHAR,
--   content TEXT,
--   image VARCHAR,
--   date DATE DEFAULT CURRENT_DATE
-- );