package com.salam.backend.service;

import com.salam.backend.dto.DetailCommandeDTO;
import com.salam.backend.dto.DetailPanierDTO;
import com.salam.backend.model.DetailCommande;

public interface DetailCommandeService {
    double calculerPrixTotal(DetailCommande detailCommande);
    void mettreAJourQuantite(DetailCommande detailCommande, int quantite);
    void appliquerRemise(DetailCommande detailCommande, double remise);
}
