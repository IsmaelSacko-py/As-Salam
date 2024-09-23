package com.salam.backend.service;

import com.salam.backend.dto.CommandeDTO;
import com.salam.backend.dto.DetailCommandeDTO;

public interface CommandeService {
    int validerCommande(CommandeDTO commandeDTO);
    int annullerCommande(CommandeDTO commandeDTO);
    int ajouterDetailsCommande(DetailCommandeDTO detailCommandeDTO);
    int retirerDetailsCommande(DetailCommandeDTO detailCommandeDTO);
    int mettreAJourStatus(CommandeDTO commandeDTO);
    double calculerMontantTotal(CommandeDTO commandeDTO);
}
