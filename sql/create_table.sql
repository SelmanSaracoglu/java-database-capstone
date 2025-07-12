CREATE DATABASE cms;
USE cms;

CREATE TABLE doctor (
	id INT AUTO_INCREMENT PRIMARY KEY,
	name VARCHAR(100) NOT NULL,
	specialization VARCHAR(100),
	phone VARCHAR(20)
);

SHOW TABLES;

CREATE TABLE doctor_available_times (
    id INT AUTO_INCREMENT PRIMARY KEY,
    doctor_id INT,
    available_date DATE,
    start_time TIME,
    end_time TIME,
    FOREIGN KEY (doctor_id) REFERENCES doctor(id)
);

DROP TABLE IF EXISTS doctor_available_times;
DROP TABLE IF EXISTS doctor;

CREATE TABLE doctors (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    speciality VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL
);

CREATE TABLE doctor_availability (
    doctor_id BIGINT,
    available_date DATE,
    start_time TIME,
    end_time TIME,
    FOREIGN KEY (doctor_id) REFERENCES doctors(id)
);

CREATE TABLE patients (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    password VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    address VARCHAR(255),
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE appointments (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    doctor_id BIGINT,
    patient_id BIGINT,
    appointment_date DATETIME NOT NULL,
    status VARCHAR(255) NOT NULL,
    FOREIGN KEY (doctor_id) REFERENCES doctors(id),
    FOREIGN KEY (patient_id) REFERENCES patients(id)
);

CREATE TABLE admin_user (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
);

SHOW TABLES;

    
    
    
    