package com.salam.backend.service.impl;

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

    public CategorieServiceImpl(CategorieRepository categorieRepository) {
        this.categorieRepository = categorieRepository;
    }

    @Override
    public Categorie save(Categorie categorie) {
        return null;
    }

    @Override
    public Categorie update(Categorie categorie) {
        return null;
    }

    @Override
    public Optional<Categorie> partialUpdate(Categorie categorie) {
        return Optional.empty();
    }

    @Override
    public Page<Categorie> findAll(Pageable pageable) {
        log.debug("Request to get all Categories");
        return categorieRepository.findAll(pageable);
    }

    @Override
    public Optional<Categorie> findOne(Integer id) {
        return Optional.empty();
    }

    @Override
    public void delete(Integer id) {

    }
//    @Override
//    public Categorie save(Categorie categorieDTO) {
//        return null;
//    }
//
//    @Override
//    public Categorie update(Categorie categorieDTO) {
//        return null;
//    }
//
//    @Override
//    public Optional<Categorie> partialUpdate(Categorie categorieDTO) {
//        return Optional.empty();
//    }
//
//    @Override
//    public Page<Categorie> findAll(Pageable pageable) {
//        return null;
//    }
//
//    @Override
//    public Optional<Categorie> findOne(Integer id) {
//        return Optional.empty();
//    }
//
//    @Override
//    public void delete(Integer id) {
//
//    }
}
