package com.salam.backend.service.impl;

import com.salam.backend.dto.ProduitDTO;
import com.salam.backend.service.ProduitService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.Optional;

public class ProduitServiceImpl implements ProduitService {
    @Override
    public ProduitDTO save(ProduitDTO produitDTO) {
        return null;
    }

    @Override
    public ProduitDTO update(ProduitDTO produitDTO) {
        return null;
    }

    @Override
    public Optional<ProduitDTO> partialUpdate(ProduitDTO produitDTO) {
        return Optional.empty();
    }

    @Override
    public Page<ProduitDTO> findAll(Pageable pageable) {
        return null;
    }

    @Override
    public Optional<ProduitDTO> findOne(Long id) {
        return Optional.empty();
    }

    @Override
    public void delete(Long id) {

    }
}
