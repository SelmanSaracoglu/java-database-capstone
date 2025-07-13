package com.smartclinic.service;

import org.springframework.stereotype.Service;

@Service
public class TokenValidationService {

    public String validateToken(String token){
        if (token == null || token.isEmpty()){
            return null;
        }
        // dummy token kontrol
        if (token.equals("dummyToken123")) {
            return "admin";
        } else if (token.equals("dummyDoctorToken")) {
            return "doctor";
        } else {
            return null;
        }
    }
}
