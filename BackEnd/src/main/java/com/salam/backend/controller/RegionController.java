package com.salam.backend.controller;


import com.salam.backend.model.Client;
import com.salam.backend.model.Region;
import com.salam.backend.service.impl.RegionServiceImpl;
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
@RequestMapping("/api/regions")
//@CrossOrigin(origins = "http://localhost:4200")
public class RegionController {

    private final RegionServiceImpl regionService;
    private final PagedResourcesAssembler<Region> pagedResourcesAssembler;
//    private static final Logger logger = LoggerFactory.getLogger(RegionController.class);

    public RegionController(RegionServiceImpl regionService, PagedResourcesAssembler<Region> pagedResourcesAssembler) {
        this.regionService = regionService;
        this.pagedResourcesAssembler = pagedResourcesAssembler;
    }

    @GetMapping
    public ResponseEntity<PagedModel<EntityModel<Region>>> getRegions(Pageable pageable) {
        log.debug("REST request to get a page of Regions");
        return ResponseEntity.ok(pagedResourcesAssembler.toModel(regionService.findAll(pageable)));
    }

    @GetMapping("/{id}")
    public ResponseEntity<Region> getRegionById(@PathVariable int id) {
        return regionService.findOne(id)
                .map(existingProduct -> ResponseEntity.ok().body(existingProduct))
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<Region> createRegion(@RequestBody Region region) {
        log.debug("Rest to save region: {}", region);
        System.out.println("termine");
        region = regionService.save(region);
        return ResponseEntity.ok().body(region);
    }

    @PutMapping("/update")
    public Region updateRegion(@RequestBody Region region) {
        return null;
    }

    @DeleteMapping("/{id}")
    public void deleteRegion(@PathVariable int id) {

    }
}
