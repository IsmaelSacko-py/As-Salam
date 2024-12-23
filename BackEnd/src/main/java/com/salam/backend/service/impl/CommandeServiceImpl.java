package com.salam.backend.service.impl;

import com.salam.backend.enumeration.EtatCommande;
import com.salam.backend.enumeration.EtatPaiement;
import com.salam.backend.model.Commande;
import com.salam.backend.repository.CommandeRepository;
import com.salam.backend.service.CommandeService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.*;

@Service
@Slf4j
@Transactional
@RequiredArgsConstructor
public class CommandeServiceImpl implements CommandeService {

    private final CommandeRepository commandeRepository;

    @Override
    public Commande annullerCommande(Commande commande) {
        return null;
    }


    @Override
    public Commande mettreAJourStatus(Commande commande) {
        return null;
    }

    @Override
    public double calculerMontantTotal(Commande commande) {
        return 0;
    }

    @Override
    public Page<Commande> getCommandeByClientId(int clientId, Pageable pageable) {
        log.debug("Request to get commandes client by id : {}", clientId);
        return commandeRepository.getCommandeByClientIdOrderByDateDesc(clientId, pageable);
    }

    @Override
    public Page<Commande> getCommandeByVendeurId(int clientId, Pageable pageable) {
        log.debug("Request to get commandes vendeur by id : {}", clientId);
        return commandeRepository.getCommandeByVendeurIdOrderByDateDesc(clientId, pageable);
    }

    @Override
    public Map<Integer, Long> countSalesByMonth(int vendeurId, EtatPaiement etatCommande) {
        log.debug("Request to get commandes by id and statut: {}", etatCommande);
        List<Object[]> results = commandeRepository.countSalesByMonth(vendeurId, etatCommande);

        // Créer une carte avec les mois de 1 à 12
        Map<Integer, Long> salesByMonth = new HashMap<>();
        for (int i = 1; i <= 12; i++) {
            salesByMonth.put(i, 0L);  // Initialiser chaque mois avec 0
        }

        // Remplir les mois avec les données récupérées
        for (Object[] result : results) {
            Integer month = (Integer) result[0];
            Long salesCount = (Long) result[1];
            salesByMonth.put(month, salesCount);  // Remplacer le nombre de ventes pour ce mois
        }

        return salesByMonth;
    }

    @Override
    public Map<Integer, Long> countOrderCancelByMonth(int vendeurId, EtatCommande etat) {
        List<Object[]> results = commandeRepository.countOrderCancelByMonth(vendeurId, etat);

        // Créer une carte avec les mois de 1 à 12
        Map<Integer, Long> salesByMonth = new HashMap<>();
        for (int i = 1; i <= 12; i++) {
            salesByMonth.put(i, 0L);  // Initialiser chaque mois avec 0
        }

        // Remplir les mois avec les données récupérées
        for (Object[] result : results) {
            Integer month = (Integer) result[0];
            Long salesCount = (Long) result[1];
            salesByMonth.put(month, salesCount);  // Remplacer le nombre de ventes pour ce mois
        }

        return salesByMonth;
    }

    @Override
    public Map<Integer, Long> countProductSalesByMonth(int vendeurId, EtatPaiement etat) {
        List<Object[]> results = commandeRepository.countProductSalesByMonth(vendeurId, etat);

        // Créer une carte avec les mois de 1 à 12
        Map<Integer, Long> salesByMonth = new HashMap<>();
        for (int i = 1; i <= 12; i++) {
            salesByMonth.put(i, 0L);  // Initialiser chaque mois avec 0
        }

        // Remplir les mois avec les données récupérées
        for (Object[] result : results) {
            Integer month = (Integer) result[0];
            Long salesCount = (Long) result[1];
            log.debug("productCount: {}", result[1]);
            salesByMonth.put(month, salesCount);  // Remplacer le nombre de ventes pour ce mois
        }

        return salesByMonth;
    }

    @Override
    public Long countProductSalesInCurrentMonth(int vendeurId, EtatPaiement etat) {
        log.debug("Request to get commandes by id and statut: {}", etat);
        Long productSales = this.commandeRepository.countProductSalesInCurrentMonth(vendeurId, etat);
        return productSales != null ? productSales : 0L;
    }


    @Override
    public Commande save(Commande commande) {
        log.debug("Request to save commande {}", commande);
        log.debug("Request to paiement {}", commande.getPaiement());
        return commandeRepository.save(commande);
    }

    @Override
    public Commande update(Commande commande) {
        Commande commande1 = commandeRepository.findById(commande.getId()).orElse(null);
        assert commande1 != null;
        commande1.setStatut(commande.getStatut());
        log.debug("Request to update commande {}", commande);
        return commandeRepository.save(commande1);
    }

    @Override
    public Optional<Commande> partialUpdate(Commande commande) {
        return Optional.empty();
    }

    @Override
    public Page<Commande> findAll(Pageable pageable) {
        return null;
    }

    @Override
    public Optional<Commande> findOne(Integer id) {
        log.debug("Request to get commande : {}", id);
        return commandeRepository.findById(id);
    }

    @Override
    public void delete(Integer id) {

    }


}
