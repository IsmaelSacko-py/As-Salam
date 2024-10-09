package com.salam.backend.service.impl;

import com.salam.backend.model.CategoriePaiement;
import com.salam.backend.repository.CategoriePaiementRepository;
import com.salam.backend.service.CategoriePaiementService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@Slf4j
@RequiredArgsConstructor
public class CategoriePaiementServiceImpl implements CategoriePaiementService {

    private final CategoriePaiementRepository categoriePaiementRepository;

    @Override
    public CategoriePaiement save(CategoriePaiement categoriePaiement) {
        return null;
    }

    @Override
    public CategoriePaiement update(CategoriePaiement categoriePaiement) {
        return null;
    }

    @Override
    public Optional<CategoriePaiement> partialUpdate(CategoriePaiement categoriePaiement) {
        return Optional.empty();
    }

    @Override
    public Page<CategoriePaiement> findAll(Pageable pageable) {
        log.debug("Request to get all CategoriePaiements");
        return categoriePaiementRepository.findAll(pageable);
    }

    @Override
    public Optional<CategoriePaiement> findOne(Integer id) {
        return Optional.empty();
    }

    @Override
    public void delete(Integer id) {

    }
}
