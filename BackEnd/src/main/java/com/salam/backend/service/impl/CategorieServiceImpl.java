package com.salam.backend.service.impl;

import com.salam.backend.model.Categorie;
import com.salam.backend.service.CategorieService;
import com.salam.backend.service.ProduitService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.Optional;

public class CategorieServiceImpl implements CategorieService {
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
        return null;
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
