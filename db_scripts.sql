CREATE DATABASE IF NOT EXISTS refumap_db;

USE refumap_db;

CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    login VARCHAR(50),
    password VARCHAR(50),
    role VARCHAR(50)
);

CREATE TABLE IF NOT EXISTS locations (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    longitude DECIMAL(9,6),
    latitude DECIMAL(9,6),
    country VARCHAR(50),
    city VARCHAR(50),
    work_time VARCHAR(50),
    category VARCHAR(50),
    description TEXT
);
