package com.jobarena.backend.controller;

import com.jobarena.backend.entity.Job;
import com.jobarena.backend.repository.JobRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/jobs")
@CrossOrigin
public class JobController {

    private final JobRepository repo;

    public JobController(JobRepository repo) {
        this.repo = repo;
    }

    @PostMapping
    public Job createJob(@RequestBody Job job) {
        return repo.save(job);
    }

    @GetMapping
    public List<Job> getAllJobs() {
        return repo.findAll();
    }
}
