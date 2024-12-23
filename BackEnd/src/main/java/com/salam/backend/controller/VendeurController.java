package com.salam.backend.controller;

import com.salam.backend.enumeration.EtatCommande;
import com.salam.backend.enumeration.EtatPaiement;
import com.salam.backend.model.Vendeur;
import com.salam.backend.model.Profil;
import com.salam.backend.service.impl.CommandeServiceImpl;
import com.salam.backend.service.impl.VendeurServiceImpl;
import com.salam.backend.service.impl.ProfilServiceImpl;
import com.salam.backend.service.impl.VendeurServiceImpl;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PagedResourcesAssembler;
import org.springframework.hateoas.EntityModel;
import org.springframework.hateoas.PagedModel;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping("/api/vendeurs")
public class VendeurController {
    private final VendeurServiceImpl vendeurService;
    private final ProfilServiceImpl profilService;
    private final CommandeServiceImpl commandeService;
    private final PagedResourcesAssembler<Vendeur> pagedResourcesAssembler;


    @GetMapping
    public ResponseEntity<PagedModel<EntityModel<Vendeur>>> findAll(Pageable pageable) {
        log.info("Rest request to find all vendeurs");
        Page<Vendeur> vendeurs = vendeurService.findAll(pageable);
        return ResponseEntity.ok(pagedResourcesAssembler.toModel(vendeurs));
    }

    @GetMapping("/{id}")
    public ResponseEntity<Vendeur> getVendeur(@PathVariable(value = "id") int id) {
        log.debug("Rest request to get Vendeur {}", id);
        Optional<Vendeur> vendeur = vendeurService.findOne(id);
        return vendeur.map( user ->
            ResponseEntity.ok().body(user)
        ).orElseGet( ()  ->
            ResponseEntity.notFound().build()
        );

    }


    @PostMapping
    public ResponseEntity<Vendeur> createVendeur(@RequestBody Vendeur vendeur) {
        log.info("Rest request to create new vendeur");
        Optional<Profil> profilDTO = profilService.findOne(1);
        return profilDTO.map(existingProfil -> {
            vendeur.setProfil(existingProfil);
            Vendeur user = vendeurService.save(vendeur);
            return ResponseEntity.ok().body(user);
        }).orElseGet(() -> ResponseEntity.badRequest().build());

    }

    @PutMapping("/update")
    public ResponseEntity<Vendeur> updateUser(@RequestBody Vendeur vendeur) {
        Vendeur vendeur1 = vendeurService.update(vendeur);
        if (vendeur != null) {
            return ResponseEntity.ok().body(vendeur1);
        }
        return ResponseEntity.notFound().build();
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Vendeur> deleteUser(@PathVariable int id) {
        try{
            vendeurService.delete(id);
            return ResponseEntity.ok().build();
        }catch (EntityNotFoundException e){
            return ResponseEntity.notFound().build();
        }
    }


    @GetMapping("/stats/{id}")
    public ResponseEntity<Map<String, Object>> vendorStats(@PathVariable("id") int id){

        EtatPaiement etatPaiement = EtatPaiement.fromString("Payé");
        EtatCommande etatCommande = EtatCommande.fromString("Annulée");

        Map<String, Object> vendorStats = new HashMap<>();

        vendorStats.put("nombreVentes", commandeService.countSalesByMonth(id, etatPaiement));
        vendorStats.put("produitsVendus", commandeService.countProductSalesByMonth(id, etatPaiement));
        vendorStats.put("commandesAnnulees", commandeService.countOrderCancelByMonth(id, etatCommande));

        return ResponseEntity.ok(vendorStats);
    }

    @GetMapping("/current-month-sales/{id}")
    public ResponseEntity<Long> currentMonthSales(@PathVariable("id") int id){

        EtatPaiement etatPaiement = EtatPaiement.fromString("Payé");

        Long totalSalesInCurrentMonth = this.commandeService.countProductSalesInCurrentMonth(id, etatPaiement);

        log.debug("total sales in current month: {}", totalSalesInCurrentMonth);
        return ResponseEntity.ok(totalSalesInCurrentMonth);
    }
}
