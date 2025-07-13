package com.smartclinic.controller;


import com.smartclinic.service.TokenValidationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class DashboardController {

    @Autowired
    private TokenValidationService tokenValidationService;

    @GetMapping("/doctorDashboard/{token}")
    public String doctorDashboard(@PathVariable("token") String token, Model model) {
        String role = tokenValidationService.validateToken(token);

        System.out.println("*** DoctorDashboard() CALLED! token = " + token);
        System.out.println("*** role = " + role);

        if ("doctor".equals(role)) {
            model.addAttribute("username", "Doctor User");
            return "doctorDashboard";
        } else {
            return "redirect:/login.html";
        }
    }

}
