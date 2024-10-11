package com.salam.backend.service.impl;

import ch.qos.logback.core.testUtil.RandomUtil;
import com.salam.backend.dto.DetailPanierDTO;
import com.salam.backend.dto.PanierDTO;
import com.salam.backend.enumeration.EtatCommande;
import com.salam.backend.model.*;
import com.salam.backend.repository.DetailCommandeRepository;
import com.salam.backend.repository.PanierRepository;
import com.salam.backend.service.DetailCommandeService;
import com.salam.backend.service.PanierService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Optional;
import java.util.Random;
import java.util.UUID;

@Slf4j
@Service
@RequiredArgsConstructor
public class PanierServiceImpl implements PanierService {

    private final PanierRepository panierRepository;
    private final DetailCommandeServiceImpl detailCommandeService;
    private final CommandeServiceImpl commandeService;
    private final CommandeServiceImpl commandeServiceImpl;
    private final DetailCommandeServiceImpl detailCommandeServiceImpl;


    /***
     * Determiner le total des articles ajoutés au panier.
     * @param client le panier du client
     * @return le résultat de l'opération. 1 : succès / 0 : échec
     */
    @Override
    public int validerPanier(Client client) {


        Panier panier = client.getPanier();
        try {
            Commande commande = new Commande();
            String numCommande = UUID.randomUUID().toString().replace("-", "").substring(0, 10).toUpperCase();
            commande.setNumero(numCommande);
            commande.setDate(LocalDateTime.now());
            commande.setStatut(EtatCommande.EN_COURS);
            commande.setClient(client);
            commande = commandeServiceImpl.save(commande);

            double montantTotal = 0;
            for (DetailPanier item : panier.getDetailsPanier()) {
                DetailCommande detail = new DetailCommande();

                detail.setProduit(item.getProduit());
                detail.setMontant(item.getMontant());
                detail.setQuantite(item.getQuantite());
                detail.setCommande(commande);

                detailCommandeServiceImpl.save(detail);

                montantTotal+= item.getMontant() * item.getQuantite();
            }
            commande.setTotalPrix(montantTotal);
            commandeServiceImpl.update(commande);
            return 1;
        }catch (Exception e) {
            log.error(e.getMessage());
            return 0;
        }
    }

    @Override
    public int viderPanier(PanierDTO panierDTO) {
        return 0;
    }

    @Override
    public Panier save(Panier panier) {
        return null;
    }

    @Override
    public Panier update(Panier panier) {
        return null;
    }

    @Override
    public Optional<Panier> partialUpdate(Panier panier) {
        return Optional.empty();
    }

    @Override
    public Page<Panier> findAll(Pageable pageable) {
        log.debug("Request to get all Paniers");
        return panierRepository.findAll(pageable);
    }

    @Override
    public Optional<Panier> findOne(Integer id) {
        log.debug("Request to get Panier : {}", id);
        return panierRepository.findById(id);
    }

    @Override
    public void delete(Integer id) {
        log.debug("Request to delete Panier : {}", id);
    }
}
