package com.salam.backend.controller;


import com.salam.backend.model.Produit;
import com.salam.backend.service.impl.DetailCommandeServiceImpl;
import com.salam.backend.service.impl.ProduitServiceImpl;
import lombok.RequiredArgsConstructor;
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
@RequiredArgsConstructor
//@CrossOrigin(origins = "http://localhost:4200")
public class ProduitController {

    private final ProduitServiceImpl produitService;
    private final DetailCommandeServiceImpl detailCommandeService;

    private final PagedResourcesAssembler<Produit> pagedResourcesAssembler;
//    private static final Logger logger = LoggerFactory.getLogger(ProduitController.class);


    @GetMapping
    public ResponseEntity<PagedModel<EntityModel<Produit>>> getProduits(Pageable pageable) {
        log.debug("REST request to get a page of Produits");
        Page<Produit> produits = produitService.findAll(pageable);
        return ResponseEntity.ok(pagedResourcesAssembler.toModel(produits));
    }

    @GetMapping("/{id}")
    public ResponseEntity<Produit> getProduitById(@PathVariable int id) {
        log.debug("REST request to get Produit : {}", id);
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

    @GetMapping("/vendeur-produit/{id}")
    public ResponseEntity<PagedModel<EntityModel<Produit>>> vendeurProduits(@PathVariable int id, Pageable pageable) {
        log.debug("REST request to find vendeur products with vendeur id : {}", id);
        Page<Produit> produits = produitService.vendeurProducts(id, pageable);
        return ResponseEntity.ok(pagedResourcesAssembler.toModel(produits));
    }

    @GetMapping("/vendeur-produit-vendu/{id}")
    public ResponseEntity<PagedModel<EntityModel<Produit>>> vendeurProduitsVendus(@PathVariable int id, Pageable pageable) {
        log.debug("REST request to find vendeur products with vendeur id : {}", id);
        Page<Produit> produits = detailCommandeService.vendeurProduitsVendus(id, pageable);
        return ResponseEntity.ok(pagedResourcesAssembler.toModel(produits));
    }
}
