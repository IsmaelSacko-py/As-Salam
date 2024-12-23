package com.salam.backend.service;

import com.salam.backend.dto.CommandeDTO;
import com.salam.backend.dto.DetailCommandeDTO;
import com.salam.backend.enumeration.EtatCommande;
import com.salam.backend.enumeration.EtatPaiement;
import com.salam.backend.model.Commande;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;
import java.util.Map;
import java.util.Optional;

public interface CommandeService extends CentralRepositoryService<Commande>{
    Commande annullerCommande(Commande commande);
    Commande mettreAJourStatus(Commande commande);
    double calculerMontantTotal(Commande commande);
    Page<Commande> getCommandeByClientId(int clientId, Pageable pageable);
    Page<Commande> getCommandeByVendeurId(int clientId, Pageable pageable);

    Map<Integer, Long> countSalesByMonth(int vendeurId, EtatPaiement etat);
    Map<Integer, Long> countOrderCancelByMonth(int vendeurId, EtatCommande etat);
    Map<Integer, Long> countProductSalesByMonth(int vendeurId, EtatPaiement etat);
    Long countProductSalesInCurrentMonth(int vendeurId, EtatPaiement etat);
}
