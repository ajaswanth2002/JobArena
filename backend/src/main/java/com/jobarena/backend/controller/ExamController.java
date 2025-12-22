package com.jobarena.backend.controller;

import com.jobarena.backend.entity.Exam;
import com.jobarena.backend.repository.ExamRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/exams")
@CrossOrigin
public class ExamController {

    private final ExamRepository repo;

    public ExamController(ExamRepository repo) {
        this.repo = repo;
    }

    @PostMapping
    public Exam createExam(@RequestBody Exam exam) {
        return repo.save(exam);
    }

    @GetMapping
    public List<Exam> getAllExams() {
        return repo.findAll();
    }
}

