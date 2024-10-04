package com.salam.backend.service.impl;

import com.salam.backend.dto.DetailPanierDTO;
import com.salam.backend.dto.PanierDTO;
import com.salam.backend.model.Panier;
import com.salam.backend.repository.PanierRepository;
import com.salam.backend.service.PanierService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Slf4j
@Service
public class PanierServiceImpl implements PanierService {

    private final PanierRepository panierRepository;

    public PanierServiceImpl(PanierRepository panierRepository) {
        this.panierRepository = panierRepository;
    }

    @Override
    public int validerPanier(PanierDTO panierDTO) {
        return 0;
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
        return null;
    }

    @Override
    public Optional<Panier> findOne(Integer id) {
        return panierRepository.findById(id);
    }

    @Override
    public void delete(Integer id) {

    }
}
