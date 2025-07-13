package com.smartclinic.controller;

import com.smartclinic.model.Appointment;
import com.smartclinic.model.Doctor;
import com.smartclinic.repository.AppointmentRepository;
import com.smartclinic.repository.DoctorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/appointments")
@CrossOrigin(origins = "*")
public class AppointmentController {

    @Autowired
    private AppointmentRepository appointmentRepository;

    @Autowired
    private DoctorRepository doctorRepository;

    @GetMapping("/doctor/{doctorId}")
    public List<Appointment> getAppointmentsForDoctor(@PathVariable Long doctorId) {
        Optional<Doctor> doctorOpt = doctorRepository.findById(doctorId);
        return doctorOpt.map(doctorRepository ->
                appointmentRepository.findByDoctor(doctorRepository)
        ).orElseThrow(() -> new RuntimeException("Doctor not found"));
    }

    @PostMapping
    public Appointment createAppointment(@RequestBody Appointment appointment) {
        return appointmentRepository.save(appointment);
    }

    @DeleteMapping("/{id}")
    public void deleteAppointment(@PathVariable Long id) {
        appointmentRepository.deleteById(id);
    }

    @GetMapping("/doctor/{doctorId}/date/{date}")
    public List<Appointment> getAppointmentsForDoctorByDate(
            @PathVariable Long doctorId,
            @PathVariable String date
    ) {
        Optional<Doctor> doctorOpt = doctorRepository.findById(doctorId);

        LocalDateTime dateTime = LocalDateTime.parse(date);

        return doctorOpt.map(doctor ->
                appointmentRepository.findByDoctorAndAppointmentDate(doctor, dateTime)
        ).orElseThrow(() -> new RuntimeException("Doctor not found"));
    }
}
