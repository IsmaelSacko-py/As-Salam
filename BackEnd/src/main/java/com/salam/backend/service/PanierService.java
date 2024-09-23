package com.salam.backend.service;

import com.salam.backend.dto.DetailPanierDTO;
import com.salam.backend.dto.PanierDTO;

public interface PanierService {
    int ajouterDetailsPanier(DetailPanierDTO detailPanierDTO);
    int retirerDetailsPanier(DetailPanierDTO detailPanierDTO);
    int validerPanier(PanierDTO panierDTO);
    int viderPanier(PanierDTO panierDTO);
    double calculerTotalPrix(PanierDTO panierDTO);
}
