package com.salam.backend.service.impl;

import com.salam.backend.dto.DetailPanierDTO;
import com.salam.backend.service.DetailPanierService;

public class DetailPanierServiceImpl implements DetailPanierService {
    @Override
    public double calculerPrixTotal(DetailPanierDTO detailPanierDTO) {
        return 0;
    }

    @Override
    public void mettreAJourQuantite(DetailPanierDTO detailPanierDTO, int quantite) {

    }

    @Override
    public void appliquerRemise(DetailPanierDTO detailPanierDTO, double remise) {

    }
}
