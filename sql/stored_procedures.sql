

-- Günlük Rapor – Doktora Göre --
DELIMITER $$

CREATE PROCEDURE GetDailyAppointmentReportByDoctor(IN reportDate DATE)
BEGIN
    SELECT
        d.id AS doctor_id,
        d.name AS doctor_name,
        COUNT(a.id) AS total_appointments
    FROM
        appointments a
    JOIN doctors d ON a.doctor_id = d.id
    WHERE DATE(a.appointment_date) = reportDate
    GROUP BY d.id, d.name;
END$$

DELIMITER ;


--  Aylık En Çok Hasta Gören Doktor --

DELIMITER $$

CREATE PROCEDURE GetDoctorWithMostPatientsByMonth(IN reportMonth INT, IN reportYear INT)
BEGIN
    SELECT
        d.id AS doctor_id,
        d.name AS doctor_name,
        COUNT(DISTINCT a.patient_id) AS patient_count
    FROM
        appointments a
    JOIN doctors d ON a.doctor_id = d.id
    WHERE
        MONTH(a.appointment_date) = reportMonth
        AND YEAR(a.appointment_date) = reportYear
    GROUP BY d.id, d.name
    ORDER BY patient_count DESC
    LIMIT 1;
END$$

DELIMITER ;

-- Yıllık En Çok Hasta Gören Doktor --

DELIMITER $$

CREATE PROCEDURE GetDoctorWithMostPatientsByYear(IN reportYear INT)
BEGIN
    SELECT
        d.id AS doctor_id,
        d.name AS doctor_name,
        COUNT(DISTINCT a.patient_id) AS patient_count
    FROM
        appointments a
    JOIN doctors d ON a.doctor_id = d.id
    WHERE
        YEAR(a.appointment_date) = reportYear
    GROUP BY d.id, d.name
    ORDER BY patient_count DESC
    LIMIT 1;
END$$

DELIMITER ;

