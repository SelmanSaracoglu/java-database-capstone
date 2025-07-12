INSERT INTO doctors (name, password, specialty)
VALUES ('Dr. John Doe', 'secretpass', 'Cardiology');

SELECT * FROM doctors;

INSERT INTO doctor_availability (doctor_id, available_date, start_time, end_time)
VALUES (1, '2025-07-15', '09:00:00', '12:00:00');

INSERT INTO patients (name, password, email, address)
VALUES ('Jane Smith', 'janespass', 'jane.smith@example.com', '123 Main St');

INSERT INTO appointments (doctor_id, patient_id, appointment_date, status)
VALUES (1, 1, '2025-07-15 09:30:00', 'SCHEDULED');

INSERT INTO admin_user (username, password)
VALUES ('admin', 'adminpass');

INSERT INTO doctors (name, specialty, password) VALUES
('Dr. Alice Smith', 'Dermatology', 'alicepass'),
('Dr. Robert Brown', 'Neurology', 'robertpass'),
('Dr. Emily Davis', 'Pediatrics', 'emilypass'),
('Dr. Michael Scott', 'Orthopedics', 'michaelpass');



INSERT INTO doctor_availability (doctor_id, available_date, start_time, end_time) VALUES
(2, '2025-07-21', '10:00:00', '13:00:00'),
(3, '2025-07-22', '14:00:00', '17:00:00'),
(4, '2025-07-23', '08:30:00', '11:30:00'),
(5, '2025-07-24', '15:00:00', '18:00:00');

SELECT * FROM doctor_availability;

INSERT INTO patients (name, password, email, address) VALUES
('Tom Hanks', 'tomhpass', 'tom.hanks@example.com', '456 Oak St'),
('Mary Johnson', 'maryjpass', 'mary.johnson@example.com', '789 Pine St'),
('David Lee', 'davidlpass', 'david.lee@example.com', '321 Maple Ave'),
('Sara Adams', 'sarapass', 'sara.adams@example.com', '654 Cedar Rd');

SELECT * FROM patients;

INSERT INTO appointments (doctor_id, patient_id, appointment_date, status) VALUES
(2, 2, '2025-07-21 10:15:00', 'SCHEDULED'),
(3, 3, '2025-07-22 14:45:00', 'CANCELLED'),
(4, 4, '2025-07-23 09:00:00', 'COMPLETED'),
(5, 5, '2025-07-24 15:30:00', 'SCHEDULED');

INSERT INTO admin_user (username, password) VALUES
('superadmin', 'superpass'),
('testadmin', 'testpass');

SELECT * FROM admin_user;
