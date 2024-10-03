package com.salam.backend.controller;


import com.salam.backend.model.Produit;
import com.salam.backend.service.impl.ProduitServiceImpl;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PagedResourcesAssembler;
import org.springframework.hateoas.EntityModel;
import org.springframework.hateoas.MediaTypes;
import org.springframework.hateoas.PagedModel;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import static org.springframework.web.servlet.function.RequestPredicates.contentType;

@Slf4j
@RestController
@RequestMapping("/api/produits")
//@CrossOrigin(origins = "http://localhost:4200")
public class ProduitController {

    private final ProduitServiceImpl produitService;

    private final PagedResourcesAssembler<Produit> pagedResourcesAssembler;
//    private static final Logger logger = LoggerFactory.getLogger(ProduitController.class);

    public ProduitController(ProduitServiceImpl produitService, PagedResourcesAssembler<Produit> pagedResourcesAssembler) {
        this.produitService = produitService;
        this.pagedResourcesAssembler = pagedResourcesAssembler;
    }

    @GetMapping
    public ResponseEntity<PagedModel<EntityModel<Produit>>> getProduits(Pageable pageable) {
        log.debug("REST request to get a page of Produits");
        Page<Produit> produits = produitService.findAll(pageable);
        return ResponseEntity.ok().body(pagedResourcesAssembler.toModel(produits));
    }

    @GetMapping("/{id}")
    public ResponseEntity<Produit> getProduitById(@PathVariable int id) {
        return produitService.findOne(id)
                .map(existingProduct -> ResponseEntity.ok().body(existingProduct))
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<Produit> createProduit(@RequestBody Produit produit) {
        log.debug("Rest to save produit: {}", produit);
        System.out.println("termine");
        produit = produitService.save(produit);
        return ResponseEntity.ok().body(produit);
    }

    @PutMapping("/update")
    public Produit updateProduit(@RequestBody Produit produit) {
        return null;
    }

    @DeleteMapping("/{id}")
    public void deleteProduit(@PathVariable int id) {

    }
}
