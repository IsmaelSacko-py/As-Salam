package com.salam.backend.service.impl;

import com.salam.backend.dto.CategorieDTO;
import com.salam.backend.service.CategorieService;
import com.salam.backend.service.ProduitService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.Optional;

public class CategorieServiceImpl implements CategorieService {
    @Override
    public CategorieDTO save(CategorieDTO categorieDTO) {
        return null;
    }

    @Override
    public CategorieDTO update(CategorieDTO categorieDTO) {
        return null;
    }

    @Override
    public Optional<CategorieDTO> partialUpdate(CategorieDTO categorieDTO) {
        return Optional.empty();
    }

    @Override
    public Page<CategorieDTO> findAll(Pageable pageable) {
        return null;
    }

    @Override
    public Optional<CategorieDTO> findOne(Long id) {
        return Optional.empty();
    }

    @Override
    public void delete(Long id) {

    }
}
