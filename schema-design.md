# Database Schema Design – Smart Clinic Management System

## MySQL Database Design

### Table: patients

| Column Name | Data Type    | Constraints               |
|-------------|--------------|---------------------------|
| id          | BIGINT       | PK, AUTO_INCREMENT        |
| name        | VARCHAR(100) | NOT NULL                  |
| email       | VARCHAR(100) | UNIQUE, NOT NULL          |
| phone       | VARCHAR(20)  | NULL                      |
| created_at  | TIMESTAMP    | DEFAULT CURRENT_TIMESTAMP |

### Table: doctors

| Column Name | Data Type    | Constraints        |
|-------------|--------------|--------------------|
| id          | BIGINT       | PK, AUTO_INCREMENT |
| name        | VARCHAR(100) | NOT NULL           |
| specialty   | VARCHAR(50)  | NOT NULL           |
| email       | VARCHAR(100) | UNIQUE, NOT NULL   |

### Table: appointments

| Column Name      | Data Type   | Constraints                 |
|------------------|-------------|-----------------------------|
| id               | BIGINT      | PK, AUTO_INCREMENT          |
| patient_id       | BIGINT      | FK → patients(id), NOT NULL |
| doctor_id        | BIGINT      | FK → doctors(id), NOT NULL  |
| appointment_date | DATETIME    | NOT NULL                    |
| status           | VARCHAR(20) | DEFAULT 'SCHEDULED'         |

### Table: admin_users

| Column Name | Data Type    | Constraints        |
|-------------|--------------|--------------------|
| id          | BIGINT       | PK, AUTO_INCREMENT |
| username    | VARCHAR(50)  | UNIQUE, NOT NULL   |
| password    | VARCHAR(255) | NOT NULL           |
| role        | VARCHAR(20)  | NOT NULL           |

## MongoDB Collection Design

### Collection: prescriptions

```json
{
  "_id": ObjectId("60f7cbb6e13f4f001a1eec9a"),
  "patientId": 123,
  "doctorId": 45,
  "date": "2025-07-10",
  "medications": [
    {
      "name": "Paracetamol",
      "dosage": "500mg",
      "instructions": "Take 1 tablet every 6 hours"
    },
    {
      "name": "Vitamin C",
      "dosage": "1000mg",
      "instructions": "Take 1 tablet daily"
    }
  ],
  "notes": "Patient advised to rest and stay hydrated."
}


