CREATE DATABASE p_escarra_db;


-- Crear tabla "users" para los usuarios registrados
CREATE TABLE users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    password VARCHAR(255) NOT NULL
);

-- Crear tabla "about" para la información de la página
CREATE TABLE about (
    about_id INT AUTO_INCREMENT PRIMARY KEY,
    about_text TEXT NOT NULL
);

-- Crear tabla "contact" para la información de contacto
CREATE TABLE contact (
    contact_id INT AUTO_INCREMENT PRIMARY KEY,
    facebook VARCHAR(100),
    instagram VARCHAR(100),
    youtube VARCHAR(100)
);

-- Crear tabla "events" para la información de eventos
CREATE TABLE events (
    events_id INT AUTO_INCREMENT PRIMARY KEY,
    image BLOB
);

-- Crear tabla "bands" para la información de las bandas
CREATE TABLE bands (
    band_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    country VARCHAR(100),
    genre VARCHAR(100),
    logo BLOB,
    biography TEXT,
    phone VARCHAR(20)
);

-- Crear tabla "socialmedia" para las redes sociales de las bandas
CREATE TABLE socialmedia (
    socialmedia_id INT AUTO_INCREMENT PRIMARY KEY,
    band_id INT NOT NULL,
    facebook VARCHAR(100),
    instagram VARCHAR(100),
    youtube VARCHAR(100),
    spotify VARCHAR(100),
    FOREIGN KEY (band_id) REFERENCES bands (band_id)
);

-- Crear tabla "discography" para la discografía de las bandas
CREATE TABLE discography (
    discography_id INT AUTO_INCREMENT PRIMARY KEY,
    band_id INT NOT NULL,
    image BLOB,
    type VARCHAR(50),
    name VARCHAR(100),
    FOREIGN KEY (band_id) REFERENCES bands (band_id)
);

-- Crear tabla "songs" para las canciones de la discografía
CREATE TABLE songs (
    song_id INT AUTO_INCREMENT PRIMARY KEY,
    discography_id INT NOT NULL,
    title VARCHAR(100),
    duration TIME,
    FOREIGN KEY (discography_id) REFERENCES discography (discography_id)
);
