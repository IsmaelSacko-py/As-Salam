package com.salam.backend.service.impl;

import com.salam.backend.dto.DetailPanierDTO;
import com.salam.backend.model.DetailPanier;
import com.salam.backend.service.DetailPanierService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.Optional;

public class DetailPanierServiceImpl implements DetailPanierService {

    @Override
    public DetailPanierDTO save(DetailPanierDTO detailPanierDTO) {
        return null;
    }

    @Override
    public DetailPanierDTO update(DetailPanierDTO detailPanierDTO) {
        return null;
    }

    @Override
    public Optional<DetailPanierDTO> partialUpdate(DetailPanierDTO detailPanierDTO) {
        return Optional.empty();
    }

    @Override
    public Page<DetailPanierDTO> findAll(Pageable pageable) {
        return null;
    }

    @Override
    public Optional<DetailPanierDTO> findOne(Integer id) {
        return Optional.empty();
    }

    @Override
    public void delete(Integer id) {

    }
}
