package com.salam.backend.service.impl;

import com.salam.backend.dto.DetailPanierDTO;
import com.salam.backend.model.DetailCommande;
import com.salam.backend.service.DetailCommandeService;

public class DetailCommandeImpl implements DetailCommandeService {
    @Override
    public double calculerPrixTotal(DetailCommande detailCommande) {
        return 0;
    }

    @Override
    public void mettreAJourQuantite(DetailCommande detailCommande, int quantite) {

    }

    @Override
    public void appliquerRemise(DetailCommande detailCommande, double remise) {

    }
}
