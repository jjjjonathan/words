-- Delete existing database and create new one
DROP DATABASE IF EXISTS words_dev;

CREATE DATABASE words_dev;

-- Make sure we're using our `blog` database
\c words_dev;

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
  created_at TIMESTAMP NOT NULL,
  updated_at TIMESTAMP NOT NULL
);

CREATE TABLE blogs (
  id SERIAL PRIMARY KEY,
  owner INTEGER REFERENCES users(id),
  title VARCHAR NOT NULL,
  subtitle VARCHAR,
  -- posts
  slug VARCHAR NOT NULL,
  created_at TIMESTAMP NOT NULL,
  updated_at TIMESTAMP NOT NULL
);

CREATE TABLE posts (
  id SERIAL PRIMARY KEY,
  title VARCHAR NOT NULL,
  body TEXT NOT NULL,
  blog INTEGER REFERENCES blogs(id),
  author INTEGER REFERENCES users(id),
  slug VARCHAR NOT NULL,
  reated_at TIMESTAMP NOT NULL,
  updated_at TIMESTAMP NOT NULL
);