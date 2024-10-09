package com.salam.backend.controller;


import com.salam.backend.model.*;
import com.salam.backend.service.impl.PanierServiceImpl;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@Slf4j
@RestController
@RequestMapping("/api/paniers")
//@CrossOrigin(origins = "http://localhost:4200")
public class PanierController {

    private final PanierServiceImpl panierService;
//    private static final Logger logger = LoggerFactory.getLogger(PanierController.class);

    public PanierController(PanierServiceImpl panierService) {
        this.panierService = panierService;
    }

    @GetMapping
    public Page<Panier> getPaniers(Pageable pageable) {
        log.debug("REST request to get a page of Paniers");
        return panierService.findAll(pageable);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Panier> getPanierById(@PathVariable int id) {
        return panierService.findOne(id)
                .map(existingProduct -> ResponseEntity.ok().body(existingProduct))
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<Panier> createPanier(@RequestBody Panier panier) {
        log.debug("Rest to save panier: {}", panier);
        System.out.println("termine");
        panier = panierService.save(panier);
        return ResponseEntity.ok().body(panier);
    }

    @PostMapping("/validate")
    public ResponseEntity<?> validatePanier(@RequestBody Client client) {
        log.debug("REST to validat client panier: {}", client);
        System.out.println("termine");
        int result = panierService.validerPanier(client);
        return ResponseEntity.ok().body(result);
    }

    @PutMapping("/update")
    public Panier updatePanier(@RequestBody Panier panier) {
        return null;
    }

    @DeleteMapping("/{id}")
    public void deletePanier(@PathVariable int id) {

    }
}
