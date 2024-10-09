package com.salam.backend.controller;


import com.salam.backend.model.DetailCommande;
import com.salam.backend.service.impl.DetailCommandeServiceImpl;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@Slf4j
@RestController
@RequestMapping("/api/detailspcommande")
@CrossOrigin(origins = "http://localhost:4200")
public class DetailCommandeController {

    private final DetailCommandeServiceImpl detailsCommandeService;
//    private static final Logger logger = LoggerFactory.getLogger(DetailCommandeController.class);

    public DetailCommandeController(DetailCommandeServiceImpl detailsCommandeService) {
        this.detailsCommandeService = detailsCommandeService;
    }

    @GetMapping
    public Page<DetailCommande> getDetailsPanier(Pageable pageable) {
        log.debug("REST request to get a page of DetailCommandes");
        return detailsCommandeService.findAll(pageable);
    }

    @GetMapping("/{id}")
    public ResponseEntity<DetailCommande> getDetailCommandeById(@PathVariable int id) {
        return detailsCommandeService.findOne(id)
                .map(existingProduct -> ResponseEntity.ok().body(existingProduct))
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<DetailCommande> createDetailCommande(@RequestBody DetailCommande detailPanier) {
        log.debug("Rest to save detailPanier: {}", detailPanier);
        detailPanier = detailsCommandeService.save(detailPanier);
        log.info("Saved detailPanier: {}", detailPanier);
        return ResponseEntity.ok().body(detailPanier);
    }

    @PutMapping("/update")
    public ResponseEntity<DetailCommande> updateDetailCommande(@RequestBody DetailCommande detailPanier) {
        log.debug("Rest to update details panier: {}", detailPanier);
        DetailCommande detailPanier1 = detailsCommandeService.update(detailPanier);
        return ResponseEntity.ok().body(detailPanier1);
    }

    @DeleteMapping("/{id}")
    public void deleteDetailCommande(@PathVariable int id) {
        log.debug("Rest to delete details panier: {}", id);
        detailsCommandeService.delete(id);
    }
}
