package com.salam.backend.service.impl;

import com.salam.backend.model.DetailCommande;
import com.salam.backend.model.Produit;
import com.salam.backend.repository.DetailCommandeRepository;
import com.salam.backend.service.DetailCommandeService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@Slf4j
@RequiredArgsConstructor
public class DetailCommandeServiceImpl implements DetailCommandeService {
    private final DetailCommandeRepository detailCommandeRepository;

    @Override
    public double calculerPrixTotal() {
        log.debug("Calculating prix total");
        return detailCommandeRepository.calculateTotalPrice();
    }

    @Override
    public void mettreAJourQuantite(DetailCommande detailCommande, int quantite) {

    }

    @Override
    public void appliquerRemise(DetailCommande detailCommande, double remise) {

    }

    @Override
    public Page<Produit> vendeurProduitsVendus(int vendeurId, Pageable pageable) {
        log.debug("Request to get vendeur produits vendus with vendeur id{}", vendeurId);
        return detailCommandeRepository.vendeurProduitsVendus(vendeurId, pageable);
    }

    @Override
    public DetailCommande save(DetailCommande detailCommande) {
        log.debug("Request to save detail commande");
        return detailCommandeRepository.save(detailCommande);
    }

    @Override
    public DetailCommande update(DetailCommande detailCommande) {
        return null;
    }

    @Override
    public Optional<DetailCommande> partialUpdate(DetailCommande detailCommande) {
        return Optional.empty();
    }

    @Override
    public Page<DetailCommande> findAll(Pageable pageable) {
        return null;
    }

    @Override
    public Optional<DetailCommande> findOne(Integer id) {
        return Optional.empty();
    }

    @Override
    public void delete(Integer id) {

    }
}
