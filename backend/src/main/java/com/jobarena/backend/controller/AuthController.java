package com.jobarena.backend.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.jobarena.backend.entity.User;
import com.jobarena.backend.repository.UserRepository;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin
public class AuthController {

    private final UserRepository repo;

    public AuthController(UserRepository repo) {
        this.repo = repo;
    }

    // ---------------- REGISTER ----------------
    @PostMapping("/register")
    public User register(@RequestBody User user) {
        // simple save (no encryption yet)
        return repo.save(user);
    }

    // ---------------- LOGIN ----------------
    @PostMapping("/login")
    public User login(@RequestBody User request) {

        User user = repo.findByUsername(request.getUsername())
                .orElseThrow(() -> new RuntimeException("User not found"));

        if (!user.getPassword().equals(request.getPassword())) {
            throw new RuntimeException("Invalid password");
        }

        // hide password before returning
        user.setPassword(null);
        return user;
    }
}