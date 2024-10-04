package com.salam.backend.service.impl;

import com.salam.backend.model.DetailPanier;
import com.salam.backend.model.Panier;
import com.salam.backend.repository.DetailPanierRepository;
import com.salam.backend.service.DetailPanierService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import javax.swing.text.html.Option;
import java.util.Optional;

@Slf4j
@Service
public class DetailPanierServiceImpl implements DetailPanierService {

    private final DetailPanierRepository detailPanierRepository;
    private final PanierServiceImpl panierService;

    public DetailPanierServiceImpl(DetailPanierRepository detailPanierRepository, PanierServiceImpl panierService) {
        this.detailPanierRepository = detailPanierRepository;
        this.panierService = panierService;
    }

    @Override
    public DetailPanier save(DetailPanier detailPanier) {
        log.debug("Request to save DetailPanier : {}", detailPanier);
        Optional<Panier> panier = panierService.findOne(1);
        log.debug("panier : {}", panier);
        detailPanier.setPanier(panier.get());
        return detailPanierRepository.save(detailPanier);
    }

    @Override
    public DetailPanier update(DetailPanier detailPanier) {
        log.debug("Request to update DetailPanier : {}", detailPanier);

        Double montant = detailPanier.getMontant() * detailPanier.getQuantite();

        Optional<DetailPanier> detailPanier1 = findOne(detailPanier.getId());

        detailPanier.setPanier(detailPanier1.get().getPanier());
        detailPanier.setProduit(detailPanier1.get().getProduit());
        detailPanier.setMontant(montant);

        return detailPanierRepository.save(detailPanier);
    }

    @Override
    public Optional<DetailPanier> partialUpdate(DetailPanier detailPanier) {
        return Optional.empty();
    }

    @Override
    public Page<DetailPanier> findAll(Pageable pageable) {
        return detailPanierRepository.findAll(pageable);
    }

    @Override
    public Optional<DetailPanier> findOne(Integer id) {
        log.debug("Request to get DetailPanier : {}", id);
        return detailPanierRepository.findById(id);
    }

    @Override
    public void delete(Integer id) {
        log.debug("Request to delete DetailPanier : {}", id);
        detailPanierRepository.deleteById(id);
    }
}
