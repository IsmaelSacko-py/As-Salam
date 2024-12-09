package com.salam.backend.service;

import com.salam.backend.dto.DetailCommandeDTO;
import com.salam.backend.dto.DetailPanierDTO;
import com.salam.backend.model.DetailCommande;
import com.salam.backend.model.Produit;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface DetailCommandeService extends CentralRepositoryService<DetailCommande>{
    double calculerPrixTotal();
    void mettreAJourQuantite(DetailCommande detailCommande, int quantite);
    void appliquerRemise(DetailCommande detailCommande, double remise);
    Page<Produit> vendeurProduitsVendus(int vendeurId, Pageable pageable);
}
