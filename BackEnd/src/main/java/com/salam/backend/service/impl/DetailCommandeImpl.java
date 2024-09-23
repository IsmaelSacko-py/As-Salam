package com.salam.backend.service.impl;

import com.salam.backend.dto.DetailCommandeDTO;
import com.salam.backend.dto.DetailPanierDTO;
import com.salam.backend.model.DetailCommande;
import com.salam.backend.service.DetailCommandeService;

public class DetailCommandeImpl implements DetailCommandeService {
    @Override
    public double calculerPrixTotal(DetailCommandeDTO detailCommandeDTO) {
        return 0;
    }

    @Override
    public void mettreAJourQuantite(DetailCommandeDTO detailCommandeDTO, int quantite) {

    }

    @Override
    public void appliquerRemise(DetailCommandeDTO detailCommandeDTO, double remise) {

    }
}
