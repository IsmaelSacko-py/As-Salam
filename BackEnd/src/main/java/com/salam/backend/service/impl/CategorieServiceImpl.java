package com.salam.backend.service.impl;

import com.salam.backend.dto.CategorieDTO;
import com.salam.backend.mapper.CategorieMapper;
import com.salam.backend.model.Categorie;
import com.salam.backend.repository.CategorieRepository;
import com.salam.backend.service.CategorieService;
import com.salam.backend.service.ProduitService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Slf4j
@Service
public class CategorieServiceImpl implements CategorieService {
    private final CategorieRepository categorieRepository;
    private final CategorieMapper categorieMapper;

    public CategorieServiceImpl(CategorieRepository categorieRepository, CategorieMapper categorieMapper) {
        this.categorieRepository = categorieRepository;
        this.categorieMapper = categorieMapper;
    }

    @Override
    public CategorieDTO save(CategorieDTO categorie) {
        return null;
    }

    @Override
    public CategorieDTO update(CategorieDTO categorie) {
        return null;
    }

    @Override
    public Optional<CategorieDTO> partialUpdate(CategorieDTO categorie) {
        return Optional.empty();
    }

    @Override
    public Page<CategorieDTO> findAll(Pageable pageable) {
        log.debug("Request to get all Categories");
        return categorieRepository.findAll(pageable).map(categorieMapper::toDto);
    }

    @Override
    public Optional<CategorieDTO> findOne(Integer id) {
        log.debug("Request to get Categorie : {}", id);
        return categorieRepository.findById(id).map(categorieMapper::toDto);
    }

    @Override
    public void delete(Integer id) {

    }
//    @Override
//    public CategorieDTO save(CategorieDTO categorieDTO) {
//        return null;
//    }
//
//    @Override
//    public CategorieDTO update(CategorieDTO categorieDTO) {
//        return null;
//    }
//
//    @Override
//    public Optional<CategorieDTO> partialUpdate(CategorieDTO categorieDTO) {
//        return Optional.empty();
//    }
//
//    @Override
//    public Page<CategorieDTO> findAll(Pageable pageable) {
//        return null;
//    }
//
//    @Override
//    public Optional<CategorieDTO> findOne(Integer id) {
//        return Optional.empty();
//    }
//
//    @Override
//    public void delete(Integer id) {
//
//    }
}
