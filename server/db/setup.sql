DROP DATABASE IF EXISTS project_db;
CREATE DATABASE project_db;
\c project_db;

DROP TABLE IF EXISTS user_bookmarks;
DROP TABLE IF EXISTS bookmarks;
DROP TABLE IF EXISTS users;
-- DROP TABLE IF EXISTS xx;
-- DROP TABLE IF EXISTS xx;


CREATE TABLE users (
  user_id SERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE
)

CREATE TABLE bookmarks (
  bookmark_id SERIAL PRIMARY KEY,
  name VARCHAR(255)
)

CREATE TABLE user_bookmarks (
  user_bookmark_id SERIAL PRIMARY KEY,
  user_id INT REFERENCES users(user_id),
  bookmark_id INT REFERENCES bookmarks(bookmark_id)
)

CREATE TABLE xx (
  l,
  l,
  l,
  l,
  l
)

CREATE TABLE xx (
  l,
  l,
  l,
  l,
  l
)

INSERT INTO xx (l, l, l, l, l) VALUES (l, l, l, l, l);
INSERT INTO xx (l, l, l, l, l) VALUES (l, l, l, l, l);
INSERT INTO xx (l, l, l, l, l) VALUES (l, l, l, l, l);
INSERT INTO xx (l, l, l, l, l) VALUES (l, l, l, l, l);
INSERT INTO xx (l, l, l, l, l) VALUES (l, l, l, l, l);
