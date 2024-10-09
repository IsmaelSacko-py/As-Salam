package com.salam.backend.controller;


import com.salam.backend.model.ModePaiement;
import com.salam.backend.service.impl.ModePaiementServiceImpl;
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
@RequestMapping("/api/modepaiements")
//@CrossOrigin(origins = "http://localhost:4200")
@RequiredArgsConstructor
public class ModePaiementController {

    private final ModePaiementServiceImpl modePaiementService;
    private final PagedResourcesAssembler<ModePaiement> pagedResourcesAssembler;


    @GetMapping
    public ResponseEntity<PagedModel<EntityModel<ModePaiement>>> getModePaiements(Pageable pageable) {
        log.debug("REST request to get a page of ModePaiements");
        Page<ModePaiement> modePaiements = modePaiementService.findAll(pageable);
        return ResponseEntity.ok(pagedResourcesAssembler.toModel(modePaiements));
    }

    @GetMapping("/{id}")
    public ResponseEntity<ModePaiement> getModePaiementById(@PathVariable int id) {
        return modePaiementService.findOne(id)
                .map(existingProduct -> ResponseEntity.ok().body(existingProduct))
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<ModePaiement> createModePaiement(@RequestBody ModePaiement modePaiement) {
        log.debug("Rest to save mode paiement: {}", modePaiement);
        System.out.println("termine");
        modePaiement = modePaiementService.save(modePaiement);
        return ResponseEntity.ok().body(modePaiement);
    }

    @PutMapping("/update")
    public ModePaiement updateModePaiement(@RequestBody ModePaiement modePaiement) {
        return null;
    }

    @DeleteMapping("/{id}")
    public void deleteModePaiement(@PathVariable int id) {

    }
}
