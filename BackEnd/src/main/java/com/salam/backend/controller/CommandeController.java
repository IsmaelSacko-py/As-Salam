package com.salam.backend.controller;

import com.salam.backend.enumeration.EtatCommande;
import com.salam.backend.enumeration.EtatPaiement;
import com.salam.backend.model.Commande;
import com.salam.backend.service.impl.CommandeServiceImpl;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PagedResourcesAssembler;
import org.springframework.hateoas.EntityModel;
import org.springframework.hateoas.PagedModel;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Objects;


@Slf4j
@RequiredArgsConstructor
@RestController
@RequestMapping("/api/commandes")
public class CommandeController {

    private final CommandeServiceImpl commandeService;
    private final PagedResourcesAssembler<Commande> pagedResourcesAssembler;


    @GetMapping
    public ResponseEntity<PagedModel<EntityModel<Commande>>> getCommandes(Pageable pageable) {
        log.debug("Rest request to get a page of Commandes");
        Page<Commande> adresses = commandeService.findAll(pageable);
        return ResponseEntity.ok(pagedResourcesAssembler.toModel(adresses));
    }

    @GetMapping("/{id}")
    public ResponseEntity<Commande> getCommandeById(@PathVariable int id) {
        log.debug("Rest request to get Commande : {}", id);
        return commandeService.findOne(id)
                .map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @GetMapping("/client/{id}")
    public ResponseEntity<PagedModel<EntityModel<Commande>>> getCommandeByClientId(@PathVariable int id, Pageable pageable) {
        log.debug("Rest request to get client commandes");
        Page<Commande> commandes = commandeService.getCommandeByClientId(id, pageable);
        return ResponseEntity.ok(pagedResourcesAssembler.toModel(commandes));
    }

    @GetMapping("/vendeur/{id}")
    public ResponseEntity<PagedModel<EntityModel<Commande>>> getCommandeByVendeurId(@PathVariable int id, Pageable pageable) {
        log.debug("Rest request to get vendeur commandes");
        Page<Commande> commandes = commandeService.getCommandeByVendeurId(id, pageable);
        return ResponseEntity.ok(pagedResourcesAssembler.toModel(commandes));
    }


    @PostMapping
    public ResponseEntity<Commande> createCommande(@RequestBody Commande adresse) {
        log.debug("Rest to save adresse: {}", adresse);
        adresse = commandeService.save(adresse);
        return ResponseEntity.ok().body(adresse);
    }

    @PutMapping
    public Commande updateCommande(@RequestBody Commande commande) {
        log.debug("Rest to update commande: {}", commande);
        log.debug("Paiment commande {}", commande.getPaiement());
        return commandeService.update(commande);
    }

    @DeleteMapping("/{id}")
    public void deleteCommande(@PathVariable int id) {
        log.debug("Rest to delete adresse: {}", id);
    }

}
