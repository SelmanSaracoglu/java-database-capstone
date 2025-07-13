package com.smartclinic.repository;

import com.smartclinic.model.Prescription;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface PrescriptionRepository extends MongoRepository<Prescription, String > {
    List<Prescription> findByPatientName(String patientName);

    List<Prescription> findByDoctorName(String doctorName);
}

