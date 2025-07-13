package com.smartclinic.controller;

import com.smartclinic.model.Admin;
import com.smartclinic.repository.AdminRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/admin_user")
@CrossOrigin(origins = "*")
public class AdminController {

    @Autowired
    private AdminRepository adminRepository;

    @GetMapping
    public java.util.List<Admin> getAllAdmins() {
        return adminRepository.findAll();
    }

    @PostMapping("/login")
    public String login(@RequestBody Admin admin) {
        Admin found = adminRepository.findByUsername(admin.getUsername());
        if (found != null && found.getPassword().equals(admin.getPassword())) {
            return "Login successful (dummy)"; // ileride JWT token dönecek
        } else {
            throw new RuntimeException("Invalid credentials");
        }
    }

    @PostMapping
    public Admin createAdmin(@RequestBody Admin admin) {
        return adminRepository.save(admin);
    }

    @DeleteMapping("/{id}")
    public void deleteAdmin(@PathVariable Long id) {
        adminRepository.deleteById(id);
    }
}
