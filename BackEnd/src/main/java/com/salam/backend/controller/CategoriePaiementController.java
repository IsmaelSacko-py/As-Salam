package com.salam.backend.controller;


import com.salam.backend.model.CategoriePaiement;
import com.salam.backend.service.impl.CategoriePaiementServiceImpl;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PagedResourcesAssembler;
import org.springframework.hateoas.EntityModel;
import org.springframework.hateoas.PagedModel;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@Slf4j
@RestController
@RequestMapping("/api/categoriepaiements")
//@CrossOrigin(origins = "http://localhost:4200")
@RequiredArgsConstructor
public class CategoriePaiementController {

    private final CategoriePaiementServiceImpl categoriePaiementService;
    private final PagedResourcesAssembler<CategoriePaiement> pagedResourcesAssembler;


    @GetMapping
    public ResponseEntity<PagedModel<EntityModel<CategoriePaiement>>> getCategoriePaiements(Pageable pageable) {
        log.debug("REST request to get a page of CategoriePaiements");
        Page<CategoriePaiement> categoriePaiements = categoriePaiementService.findAll(pageable);
        return ResponseEntity.ok(pagedResourcesAssembler.toModel(categoriePaiements));
    }

    @GetMapping("/{id}")
    public ResponseEntity<CategoriePaiement> getCategoriePaiementById(@PathVariable int id) {
        return categoriePaiementService.findOne(id)
                .map(existingProduct -> ResponseEntity.ok().body(existingProduct))
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<CategoriePaiement> createCategoriePaiement(@RequestBody CategoriePaiement categoriePaiement) {
        log.debug("Rest to save categorie paiement: {}", categoriePaiement);
        System.out.println("termine");
        categoriePaiement = categoriePaiementService.save(categoriePaiement);
        return ResponseEntity.ok().body(categoriePaiement);
    }

    @PutMapping("/update")
    public CategoriePaiement updateCategoriePaiement(@RequestBody CategoriePaiement categoriePaiement) {
        return null;
    }

    @DeleteMapping("/{id}")
    public void deleteCategoriePaiement(@PathVariable int id) {

    }
}
