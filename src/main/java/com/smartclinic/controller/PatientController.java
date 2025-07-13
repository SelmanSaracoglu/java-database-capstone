package com.smartclinic.controller;

import com.smartclinic.model.Patient;
import com.smartclinic.repository.PatientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/patients")
@CrossOrigin(origins = "*")
public class PatientController {

    @Autowired
    private PatientRepository patientRepository;

    @GetMapping
    public List<Patient> getAllPatients() {
        return patientRepository.findAll();
    }

    @PostMapping
    public Patient createPatient(@RequestBody Patient patient) {
        return patientRepository.save(patient);
    }

    @GetMapping("/search")
    public List<Patient> searchPatients(@RequestParam(required = false) String name,
                                        @RequestParam(required = false) String email) {
        if (name != null && !name.isEmpty()) {
            return patientRepository.findByNameContainingIgnoreCase(name);
        } else if (email != null && !email.isEmpty()) {
            Patient p = patientRepository.findByEmail(email);
            return p != null ? List.of(p) : List.of();
        } else {
            return patientRepository.findAll();
        }
    }

    @DeleteMapping("/{id}")
    public void deletePatient(@PathVariable Long id) {
        patientRepository.deleteById(id);
    }
}
