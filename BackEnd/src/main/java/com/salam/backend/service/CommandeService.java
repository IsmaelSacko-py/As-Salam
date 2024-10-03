package com.salam.backend.service;

import com.salam.backend.dto.CommandeDTO;
import com.salam.backend.dto.DetailCommandeDTO;
import com.salam.backend.model.Commande;

public interface CommandeService {
    Commande annullerCommande(Commande commande);
    Commande mettreAJourStatus(Commande commande);
    double calculerMontantTotal(Commande commande);
}
