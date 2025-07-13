package com.smartclinic.repository;

import com.smartclinic.model.Doctor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DoctorRepository extends JpaRepository<Doctor, Long> {
    // örnek: specialty’e göre doktor arama
    List<Doctor> findBySpecialty(String specialty);

    List<Doctor> findByNameContainingIgnoreCase(String name);
}
