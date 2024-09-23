package com.salam.backend.service;

import com.salam.backend.dto.DetailPanierDTO;

public interface DetailPanierService {
    double calculerPrixTotal(DetailPanierDTO detailPanierDTO);
    void mettreAJourQuantite(DetailPanierDTO detailPanierDTO, int quantite);
    void appliquerRemise(DetailPanierDTO detailPanierDTO, double remise);
}
