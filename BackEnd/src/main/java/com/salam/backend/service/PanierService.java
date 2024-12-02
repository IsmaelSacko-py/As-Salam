package com.salam.backend.service;

import com.salam.backend.dto.PanierDTO;
import com.salam.backend.model.Client;
import com.salam.backend.model.Commande;
import com.salam.backend.model.Panier;

public interface PanierService extends CentralRepositoryService<Panier> {
    Commande validerPanier(Client client);
    void viderPanier(Panier panier);

}
