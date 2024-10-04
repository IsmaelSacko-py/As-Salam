package com.salam.backend.controller;


import com.salam.backend.model.Categorie;
import com.salam.backend.service.impl.CategorieServiceImpl;
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
@RequestMapping("/api/categories")
//@CrossOrigin(origins = "http://localhost:4200")
public class CategorieController {

    private final CategorieServiceImpl categorieService;
    private final PagedResourcesAssembler<Categorie> pagedResourcesAssembler;
//    private static final Logger logger = LoggerFactory.getLogger(CategorieController.class);

    public CategorieController(CategorieServiceImpl categorieService, PagedResourcesAssembler<Categorie> pagedResourcesAssembler) {
        this.categorieService = categorieService;
        this.pagedResourcesAssembler = pagedResourcesAssembler;
    }

    @GetMapping
    public ResponseEntity<PagedModel<EntityModel<Categorie>>> getCategories(Pageable pageable) {
        log.debug("REST request to get a page of Categories");
        Page<Categorie> categories = categorieService.findAll(pageable);
        return ResponseEntity.ok(pagedResourcesAssembler.toModel(categories));
    }

    @GetMapping("/{id}")
    public ResponseEntity<Categorie> getCategorieById(@PathVariable int id) {
        return categorieService.findOne(id)
                .map(existingProduct -> ResponseEntity.ok().body(existingProduct))
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<Categorie> createCategorie(@RequestBody Categorie categorie) {
        log.debug("Rest to save categorie: {}", categorie);
        System.out.println("termine");
        categorie = categorieService.save(categorie);
        return ResponseEntity.ok().body(categorie);
    }

    @PutMapping("/update")
    public Categorie updateCategorie(@RequestBody Categorie categorie) {
        return null;
    }

    @DeleteMapping("/{id}")
    public void deleteCategorie(@PathVariable int id) {

    }
}
