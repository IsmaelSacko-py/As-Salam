package com.salam.backend.controller;

import com.salam.backend.model.Client;
import com.salam.backend.model.Profil;
import com.salam.backend.model.Utilisateur;
import com.salam.backend.model.Vendeur;
import com.salam.backend.service.UtilisateurService;
import com.salam.backend.service.impl.ClientServiceImpl;
import com.salam.backend.service.impl.ProfilServiceImpl;
import com.salam.backend.service.impl.VendeurServiceImpl;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PagedResourcesAssembler;
import org.springframework.hateoas.EntityModel;
import org.springframework.hateoas.PagedModel;
import org.springframework.http.HttpEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@Slf4j
@RestController
@RequestMapping("/api/utilisateurs")
@RequiredArgsConstructor
public class UtilisateurController {
    private final UtilisateurService<Utilisateur> utilisateurService;
//    private final ClientServiceImpl<Client> clientService;
    private final VendeurServiceImpl vendeurService;
    private final ProfilServiceImpl profilService;
    private final PagedResourcesAssembler<Utilisateur> pagedResourcesAssembler;

    @GetMapping
    public ResponseEntity<PagedModel<EntityModel<Utilisateur>>> findAll(Pageable pageable) {
        Page<Utilisateur> utilisateurs = utilisateurService.findAll(pageable);
        return ResponseEntity.ok(pagedResourcesAssembler.toModel(utilisateurs));

    }

    @GetMapping("/{id}")
    public ResponseEntity<Utilisateur> getUser(@PathVariable(value = "id") int id) {
        log.debug("Rest to get utilisateur with id {}", id);
        Optional<Utilisateur> utilisateur = utilisateurService.findOne(id);
        return utilisateur.map(ResponseEntity::ok)
                .orElseGet( () -> ResponseEntity.notFound().build());
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
