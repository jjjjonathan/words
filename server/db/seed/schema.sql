-- Delete existing database and create new one
DROP DATABASE IF EXISTS :dbname;
CREATE DATABASE :dbname;

-- Move into the database
\c :dbname;

------------
-- SCHEMA --
------------

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  first_name VARCHAR NOT NULL,
  last_name VARCHAR NOT NULL,
  username VARCHAR UNIQUE NOT NULL,
  password_hash VARCHAR NOT NULL,
  email VARCHAR UNIQUE NOT NULL,
  location VARCHAR,
  bio VARCHAR,
  -- blogs
  -- posts
  created_at TIMESTAMP NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE blogs (
  id SERIAL PRIMARY KEY,
  owner INTEGER REFERENCES users(id),
  title VARCHAR NOT NULL,
  subtitle VARCHAR,
  -- posts
  slug VARCHAR UNIQUE NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE posts (
  id SERIAL PRIMARY KEY,
  title VARCHAR NOT NULL,
  body TEXT NOT NULL,
  blog INTEGER REFERENCES blogs(id),
  author INTEGER REFERENCES users(id),
  slug VARCHAR UNIQUE NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP NOT NULL DEFAULT NOW()
);

-- Create trigger function to auto-update updated_at timestamp
CREATE OR REPLACE FUNCTION trigger_set_timestamp()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Set trigger on each table

CREATE TRIGGER set_timestamp
BEFORE UPDATE ON users
FOR EACH ROW
EXECUTE PROCEDURE trigger_set_timestamp();

CREATE TRIGGER set_timestamp
BEFORE UPDATE ON blogs
FOR EACH ROW
EXECUTE PROCEDURE trigger_set_timestamp();

CREATE TRIGGER set_timestamp
BEFORE UPDATE ON posts
FOR EACH ROW
EXECUTE PROCEDURE trigger_set_timestamp();