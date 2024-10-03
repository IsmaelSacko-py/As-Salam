package com.salam.backend.controller;


import com.salam.backend.model.Adresse;
import com.salam.backend.service.AdresseService;
import com.salam.backend.service.impl.AdresseServiceImpl;
import lombok.extern.slf4j.Slf4j;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Slf4j
@RestController
@RequestMapping("/api/adresses")
//@CrossOrigin(origins = "http://localhost:4200")
public class AdresseController {

    private final AdresseServiceImpl adresseService;
//    private static final Logger logger = LoggerFactory.getLogger(AdresseController.class);

    public AdresseController(AdresseServiceImpl adresseService) {
        this.adresseService = adresseService;
    }

    @GetMapping
    public Page<Adresse> getAdresses(Pageable pageable) {
        log.debug("REST request to get a page of Adresses");
        return adresseService.findAll(pageable);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Adresse> getAdresseById(@PathVariable int id) {
        return adresseService.findOne(id)
                .map(existingProduct -> ResponseEntity.ok().body(existingProduct))
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<Adresse> createAdresse(@RequestBody Adresse adresse) {
        log.debug("Rest to save adresse: {}", adresse);
        System.out.println("termine");
        adresse = adresseService.save(adresse);
        return ResponseEntity.ok().body(adresse);
    }

    @PutMapping("/update")
    public Adresse updateAdresse(@RequestBody Adresse adresse) {
        return null;
    }

    @DeleteMapping("/{id}")
    public void deleteAdresse(@PathVariable int id) {

    }
}
