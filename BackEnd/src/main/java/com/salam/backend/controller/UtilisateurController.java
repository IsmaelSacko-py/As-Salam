package com.salam.backend.controller;

import com.salam.backend.model.Client;
import com.salam.backend.model.Profil;
import com.salam.backend.model.Utilisateur;
import com.salam.backend.model.Vendeur;
import com.salam.backend.service.UtilisateurService;
import com.salam.backend.service.impl.ClientServiceImpl;
import com.salam.backend.service.impl.ProfilServiceImpl;
import com.salam.backend.service.impl.UtilisateurServiceImpl;
import com.salam.backend.service.impl.VendeurServiceImpl;
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
    private final UtilisateurServiceImpl<Utilisateur> utilisateurService;
    private final ClientServiceImpl<Client> clientService;
    private final VendeurServiceImpl vendeurService;
    private final ProfilServiceImpl profilService;

    public UtilisateurController(UtilisateurServiceImpl<Utilisateur> utilisateurService, ClientServiceImpl<Client> clientService, VendeurServiceImpl vendeurService, ProfilServiceImpl profilService) {
        this.utilisateurService = utilisateurService;
        this.clientService = clientService;
        this.vendeurService = vendeurService;
        this.profilService = profilService;
    }

    @GetMapping("/{id}")
    public ResponseEntity<Utilisateur> getUser(@PathVariable(value = "id") int id) {
        Optional<Utilisateur> utilisateur = utilisateurService.findOne(id);
        return utilisateur.map( user ->
            ResponseEntity.ok().body(user)
        ).orElseGet( ()  ->
            ResponseEntity.notFound().build()
        );

    }

    @GetMapping("/client/{id}")
    public ResponseEntity<Client> getClient(@PathVariable(value = "id") int id) {
        Optional<Client> client = clientService.findOne(id);
        return client.map( user ->
            ResponseEntity.ok().body(user)
        ).orElseGet( ()  ->
            ResponseEntity.notFound().build()
        );

    }

    @PostMapping("/client")
    public ResponseEntity<Client> createClient(@RequestBody Client client) {
        log.info("Adding new client");
        Optional<Profil> profilDTO = profilService.findOne(2);
        return profilDTO.map(existingProfil -> {
            client.setProfil(existingProfil);
            Client user = clientService.save(client);
            return ResponseEntity.ok().body(user);
        }).orElseGet(() -> ResponseEntity.badRequest().build());

    }

    @PostMapping("/vendeur")
    public ResponseEntity<Vendeur> createVendeur(@RequestBody Vendeur vendeur) {
        log.info("Adding new vendeur");
        Optional<Profil> profilDTO = profilService.findOne(2);
        return profilDTO.map(existingProfil -> {
            vendeur.setProfil(existingProfil);
            Vendeur user = vendeurService.save(vendeur);
            return ResponseEntity.ok().body(user);
        }).orElseGet(() -> ResponseEntity.badRequest().build());

    }
    @PostMapping
    public ResponseEntity<Utilisateur> createUtilisateur(@RequestBody Utilisateur utilisateur) {
        log.info("Adding new utilisateur");
        Optional<Profil> profilDTO = profilService.findOne(1);
        return profilDTO.map(existingProfil -> {
            utilisateur.setProfil(existingProfil);
            Utilisateur user = utilisateurService.save(utilisateur);
            return ResponseEntity.ok().body(user);
        }).orElseGet(() -> ResponseEntity.badRequest().build());

    }

    @PutMapping("/update")
    public ResponseEntity<Utilisateur> updateUser(@RequestBody Utilisateur utilisateur) {
        Utilisateur utilisateur1 = utilisateurService.update(utilisateur);
        if (utilisateur != null) {
            return ResponseEntity.ok().body(utilisateur1);
        }
        return ResponseEntity.notFound().build();
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Utilisateur> deleteUser(@PathVariable int id) {
        try{
            utilisateurService.delete(id);
            return ResponseEntity.ok().build();
        }catch (EntityNotFoundException e){
            return ResponseEntity.notFound().build();
        }
    }
}
