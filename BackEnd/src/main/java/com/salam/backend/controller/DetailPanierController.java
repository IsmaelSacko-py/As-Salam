package com.salam.backend.controller;


import com.salam.backend.model.DetailPanier;
import com.salam.backend.service.impl.DetailPanierServiceImpl;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@Slf4j
@RestController
@RequestMapping("/api/detailspanier")
@CrossOrigin(origins = "http://localhost:4200")
public class DetailPanierController {

    private final DetailPanierServiceImpl detailsPanierService;
//    private static final Logger logger = LoggerFactory.getLogger(DetailPanierController.class);

    public DetailPanierController(DetailPanierServiceImpl detailsPanierService) {
        this.detailsPanierService = detailsPanierService;
    }

    @GetMapping
    public Page<DetailPanier> getDetailsPanier(Pageable pageable) {
        log.debug("REST request to get a page of DetailPaniers");
        return detailsPanierService.findAll(pageable);
    }

    @GetMapping("/{id}")
    public ResponseEntity<DetailPanier> getDetailPanierById(@PathVariable int id) {
        return detailsPanierService.findOne(id)
                .map(existingProduct -> ResponseEntity.ok().body(existingProduct))
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<DetailPanier> createDetailPanier(@RequestBody DetailPanier detailPanier) {
        log.debug("Rest to save detailPanier: {}", detailPanier);
        detailPanier = detailsPanierService.save(detailPanier);
        log.info("Saved detailPanier: {}", detailPanier);
        return ResponseEntity.ok().body(detailPanier);
    }

    @PutMapping("/update")
    public ResponseEntity<DetailPanier> updateDetailPanier(@RequestBody DetailPanier detailPanier) {
        log.debug("Rest to update details panier: {}", detailPanier);
        DetailPanier detailPanier1 = detailsPanierService.update(detailPanier);
        return ResponseEntity.ok().body(detailPanier1);
    }

    @DeleteMapping("/{id}")
    public void deleteDetailPanier(@PathVariable int id) {
        log.debug("Rest to delete details panier: {}", id);
        detailsPanierService.delete(id);
    }
}
