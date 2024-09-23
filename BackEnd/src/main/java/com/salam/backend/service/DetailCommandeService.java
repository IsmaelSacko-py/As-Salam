package com.salam.backend.service;

import com.salam.backend.dto.DetailCommandeDTO;
import com.salam.backend.dto.DetailPanierDTO;

public interface DetailCommandeService {
    double calculerPrixTotal(DetailCommandeDTO detailCommandeDTO);
    void mettreAJourQuantite(DetailCommandeDTO detailCommandeDTO, int quantite);
    void appliquerRemise(DetailCommandeDTO detailCommandeDTO, double remise);
}
