package com.salam.backend.controller;

import com.salam.backend.dto.ProfilDTO;
import com.salam.backend.dto.UtilisateurDTO;
import com.salam.backend.service.UtilisateurService;
import com.salam.backend.service.impl.ProfilServiceImpl;
import com.salam.backend.service.impl.UtilisateurServiceImpl;
import jakarta.persistence.EntityNotFoundException;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@Slf4j
@RestController
@RequestMapping("/api/utilisateurs")
public class UtilisateurController {
    private final UtilisateurServiceImpl utilisateurService;
    private final ProfilServiceImpl profilService;

    public UtilisateurController(UtilisateurServiceImpl utilisateurService, ProfilServiceImpl profilService) {
        this.utilisateurService = utilisateurService;
        this.profilService = profilService;
    }

    @GetMapping("/{id}")
    public ResponseEntity<UtilisateurDTO> getUser(@PathVariable(value = "id") int id) {
        Optional<UtilisateurDTO> utilisateurDTO = utilisateurService.findOne(id);
        return utilisateurDTO.map( user ->
            ResponseEntity.ok().body(user)
        ).orElseGet( ()  ->
            ResponseEntity.notFound().build()
        );

    }

    @PostMapping
    public ResponseEntity<UtilisateurDTO> addUser(@RequestBody UtilisateurDTO utilisateurDTO) {
        log.info("Adding new utilisateur");
        Optional<ProfilDTO> profilDTO = profilService.findOne(2);
        return profilDTO.map(existingProfil -> {
            utilisateurDTO.setProfil(existingProfil);
            UtilisateurDTO user = utilisateurService.save(utilisateurDTO);
            return ResponseEntity.ok().body(user);
        }).orElseGet(() -> ResponseEntity.badRequest().build());

    }

    @PutMapping("/update")
    public ResponseEntity<UtilisateurDTO> updateUser(@RequestBody UtilisateurDTO utilisateurDTO) {
        UtilisateurDTO utilisateur = utilisateurService.update(utilisateurDTO);
        if (utilisateur != null) {
            return ResponseEntity.ok().body(utilisateur);
        }
        return ResponseEntity.notFound().build();
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<UtilisateurDTO> deleteUser(@PathVariable int id) {
        try{
            utilisateurService.delete(id);
            return ResponseEntity.ok().build();
        }catch (EntityNotFoundException e){
            return ResponseEntity.notFound().build();
        }
    }
}
