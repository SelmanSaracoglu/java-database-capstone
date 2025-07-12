package com.smartclinic.controller;


import com.smartclinic.model.Prescription;
import com.smartclinic.repository.PrescriptionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/prescriptions")
public class PrescriptionController {

    @Autowired
    private PrescriptionRepository prescriptionRepository;

    @PostMapping
    public Prescription createPrescription(@RequestBody Prescription prescription) {
        return prescriptionRepository.save(prescription);
    }

    @GetMapping
    public List<Prescription> getAllPrescriptions() {
        return prescriptionRepository.findAll();
    }

    @GetMapping("/{id}")
    public Prescription getPrescriptionById(@PathVariable String id) {
        return prescriptionRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Prescription not found with id " + id));
    }

    @DeleteMapping("/{id}")
    public void deletePrescription(@PathVariable String id) {
        prescriptionRepository.deleteById(id);
    }

    @PutMapping("/{id}")
    public Prescription updatePrescription(@PathVariable String id,
                                           @RequestBody Prescription updatedPrescription) {
        Prescription prescription = prescriptionRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Prescription not found with id " + id));

        prescription.setPatientName(updatedPrescription.getPatientName());
        prescription.setDoctorName(updatedPrescription.getDoctorName());
        prescription.setAppointmentId(updatedPrescription.getAppointmentId());
        prescription.setMedications(updatedPrescription.getMedications());
        prescription.setNotes(updatedPrescription.getNotes());
        prescription.setCreatedAt(updatedPrescription.getCreatedAt());

        return prescriptionRepository.save(prescription);
    }
}
