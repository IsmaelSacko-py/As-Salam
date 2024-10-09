package com.salam.backend.service;

import com.salam.backend.dto.DetailPanierDTO;
import com.salam.backend.dto.PanierDTO;
import com.salam.backend.model.Client;
import com.salam.backend.model.DetailPanier;
import com.salam.backend.model.Panier;

public interface PanierService extends CentralRepositoryService<Panier> {
    int validerPanier(Client client);
    int viderPanier(PanierDTO panierDTO);

}
