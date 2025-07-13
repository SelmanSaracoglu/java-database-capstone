package com.smartclinic.repository;

import com.smartclinic.model.Appointment;
import com.smartclinic.model.Doctor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;
import java.util.List;

@Repository
public interface AppointmentRepository extends JpaRepository<Appointment, Long> {
    List<Appointment> findByDoctor(Doctor doctor);

    List<Appointment> findByAppointmentDate(LocalDateTime date);

    List<Appointment> findByDoctorAndAppointmentDate(Doctor doctor, LocalDateTime date);
}
