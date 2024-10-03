package com.salam.backend.service.impl;

import com.salam.backend.model.DetailPanier;
import com.salam.backend.service.DetailPanierService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.Optional;

public class DetailPanierServiceImpl implements DetailPanierService {

    @Override
    public DetailPanier save(DetailPanier detailPanier) {
        return null;
    }

    @Override
    public DetailPanier update(DetailPanier detailPanier) {
        return null;
    }

    @Override
    public Optional<DetailPanier> partialUpdate(DetailPanier detailPanier) {
        return Optional.empty();
    }

    @Override
    public Page<DetailPanier> findAll(Pageable pageable) {
        return null;
    }

    @Override
    public Optional<DetailPanier> findOne(Integer id) {
        return Optional.empty();
    }

    @Override
    public void delete(Integer id) {

    }
}
