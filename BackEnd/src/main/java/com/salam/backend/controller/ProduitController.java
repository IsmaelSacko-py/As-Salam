package com.salam.backend.controller;


import com.salam.backend.dto.ProduitDTO;
import com.salam.backend.service.ProduitService;
import com.salam.backend.service.impl.ProduitServiceImpl;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Slf4j
@RestController
@RequestMapping("/api/produits")
public class ProduitController {

    private final ProduitServiceImpl produitService;

    public ProduitController(ProduitServiceImpl produitService) {
        this.produitService = produitService;
    }

    @GetMapping
    public ResponseEntity<List<ProduitDTO>> getProduits() {
        return null;
    }

    @GetMapping("/{id}")
    public ResponseEntity<ProduitDTO> getProduitById(@PathVariable int id) {
        return produitService.findOne(id)
                .map(existingProduct -> ResponseEntity.ok().body(existingProduct))
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public ProduitDTO createProduit(@RequestBody ProduitDTO produit) {
        log.debug("Rest to save produit: {}", produit);
        LocalDateTime instant= LocalDateTime.now();
        produit.setDateAjout(instant);
        produitService.save(produit);
        return produit;
    }

    @PutMapping("/update")
    public ProduitDTO updateProduit(@RequestBody ProduitDTO produit) {
        return null;
    }

    @DeleteMapping("/{id}")
    public void deleteProduit(@PathVariable int id) {

    }
}
