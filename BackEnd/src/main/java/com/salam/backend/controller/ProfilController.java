package com.salam.backend.controller;


import com.salam.backend.model.Profil;
import com.salam.backend.service.impl.ProfilServiceImpl;
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
@RequestMapping("/api/profils")
//@CrossOrigin(origins = "http://localhost:4200")
public class ProfilController {

    private final ProfilServiceImpl profilService;
    private final PagedResourcesAssembler<Profil> pagedResourcesAssembler;
//    private static final Logger logger = LoggerFactory.getLogger(ProfilController.class);

    public ProfilController(ProfilServiceImpl profilService, PagedResourcesAssembler<Profil> pagedResourcesAssembler) {
        this.profilService = profilService;
        this.pagedResourcesAssembler = pagedResourcesAssembler;
    }

    @GetMapping
    public ResponseEntity<Page<Profil>> getProfils(Pageable pageable) {
        log.debug("REST request to get a page of Profils");
        Page<Profil> profils = profilService.findAll(pageable);
        return ResponseEntity.ok(profils);
    }

        @GetMapping("/member-profil")
    public ResponseEntity<Page<Profil>> findMemberProfil(Pageable pageable) {
        log.debug("REST request to get member profil");
        Page<Profil> profils = profilService.findMemberProfil(pageable);
        return ResponseEntity.ok(profils);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Profil> getProfilById(@PathVariable int id) {
        return profilService.findOne(id)
                .map(existingProduct -> ResponseEntity.ok().body(existingProduct))
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<Profil> createProfil(@RequestBody Profil profil) {
        log.debug("Rest to save profil: {}", profil);
        System.out.println("termine");
        profil = profilService.save(profil);
        return ResponseEntity.ok().body(profil);
    }

    @PutMapping("/update")
    public Profil updateProfil(@RequestBody Profil profil) {
        return null;
    }

    @DeleteMapping("/{id}")
    public void deleteProfil(@PathVariable int id) {

    }
}
