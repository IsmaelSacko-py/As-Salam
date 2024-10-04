package com.salam.backend.service;

import com.salam.backend.dto.DetailPanierDTO;
import com.salam.backend.dto.PanierDTO;
import com.salam.backend.model.Panier;

public interface PanierService extends CentralRepositoryService<Panier> {
    int validerPanier(PanierDTO panierDTO);
    int viderPanier(PanierDTO panierDTO);

}
