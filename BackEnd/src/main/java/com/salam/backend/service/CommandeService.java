package com.salam.backend.service;

import com.salam.backend.dto.CommandeDTO;
import com.salam.backend.dto.DetailCommandeDTO;
import com.salam.backend.model.Commande;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;
import java.util.Optional;

public interface CommandeService extends CentralRepositoryService<Commande>{
    Commande annullerCommande(Commande commande);
    Commande mettreAJourStatus(Commande commande);
    double calculerMontantTotal(Commande commande);
    Page<Commande> getCommandeByClientId(int clientId, Pageable pageable);
}
