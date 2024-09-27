package com.salam.backend.service;

import com.salam.backend.dto.CommandeDTO;
import com.salam.backend.dto.DetailCommandeDTO;

public interface CommandeService {
    CommandeDTO annullerCommande(CommandeDTO commandeDTO);
    CommandeDTO mettreAJourStatus(CommandeDTO commandeDTO);
    double calculerMontantTotal(CommandeDTO commandeDTO);
}
