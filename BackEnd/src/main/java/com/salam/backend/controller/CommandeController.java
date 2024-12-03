package com.salam.backend.controller;

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

import java.util.List;


@Slf4j
@RequiredArgsConstructor
@RestController
@RequestMapping("/api/commandes")
public class CommandeController {

    private final CommandeServiceImpl commandeService;
    private final PagedResourcesAssembler<Commande> pagedResourcesAssembler;


    @GetMapping
    public ResponseEntity<PagedModel<EntityModel<Commande>>> getCommandes(Pageable pageable) {
        log.debug("REST request to get a page of Commandes");
        Page<Commande> adresses = commandeService.findAll(pageable);
        return ResponseEntity.ok(pagedResourcesAssembler.toModel(adresses));
    }

    @GetMapping("/{id}")
    public ResponseEntity<Commande> getCommandeById(@PathVariable int id) {
        return commandeService.findOne(id)
                .map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @GetMapping("/client/{id}")
    public ResponseEntity<PagedModel<EntityModel<Commande>>> getCommandeByClientId(@PathVariable int id, Pageable pageable) {
        log.debug("REST request to get client commandes");
        Page<Commande> commandes = commandeService.getCommandeByClientId(id, pageable);
        return ResponseEntity.ok(pagedResourcesAssembler.toModel(commandes));
    }


    @PostMapping
    public ResponseEntity<Commande> createCommande(@RequestBody Commande adresse) {
        log.debug("REST to save adresse: {}", adresse);
        adresse = commandeService.save(adresse);
        return ResponseEntity.ok().body(adresse);
    }

    @PutMapping("/update")
    public Commande updateCommande(@RequestBody Commande adresse) {
        return null;
    }

    @DeleteMapping("/{id}")
    public void deleteCommande(@PathVariable int id) {
        log.debug("Rest to delete adresse: {}", id);
    }


}
