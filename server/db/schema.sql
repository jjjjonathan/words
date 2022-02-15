-- Delete existing database and create new one
DROP DATABASE IF EXISTS words_dev;

CREATE DATABASE words_dev;

-- Make sure we're using our `blog` database
\c words_dev;

-- We can create our user table
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

-- We can create our post table
-- CREATE TABLE IF NOT EXISTS post (
--   id SERIAL PRIMARY KEY,
--   userId INTEGER REFERENCES user(id),
--   title VARCHAR,
--   content TEXT,
--   image VARCHAR,
--   date DATE DEFAULT CURRENT_DATE
-- );