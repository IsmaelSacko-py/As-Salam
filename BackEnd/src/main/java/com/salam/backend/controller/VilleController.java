package com.salam.backend.controller;


import com.salam.backend.model.Ville;
import com.salam.backend.service.impl.VilleServiceImpl;
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
@RequestMapping("/api/villes")
//@CrossOrigin(origins = "http://localhost:4200")
public class VilleController {

    private final VilleServiceImpl villeService;
    private final PagedResourcesAssembler<Ville> pagedResourcesAssembler;
//    private static final Logger logger = LoggerFactory.getLogger(VilleController.class);

    public VilleController(VilleServiceImpl villeService, PagedResourcesAssembler<Ville> pagedResourcesAssembler) {
        this.villeService = villeService;
        this.pagedResourcesAssembler = pagedResourcesAssembler;
    }

    @GetMapping
    public ResponseEntity<PagedModel<EntityModel<Ville>>> getVilles(Pageable pageable) {
        log.debug("REST request to get a page of Villes");
        Page<Ville> villes = villeService.findAll(pageable);
        return ResponseEntity.ok(pagedResourcesAssembler.toModel(villes));
    }

    @GetMapping("/{id}")
    public ResponseEntity<Ville> getVilleById(@PathVariable int id) {
        return villeService.findOne(id)
                .map(existingProduct -> ResponseEntity.ok().body(existingProduct))
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<Ville> createVille(@RequestBody Ville ville) {
        log.debug("Rest to save ville: {}", ville);
        System.out.println("termine");
        ville = villeService.save(ville);
        return ResponseEntity.ok().body(ville);
    }

    @PutMapping("/update")
    public Ville updateVille(@RequestBody Ville ville) {
        return null;
    }

    @DeleteMapping("/{id}")
    public void deleteVille(@PathVariable int id) {

    }
}
