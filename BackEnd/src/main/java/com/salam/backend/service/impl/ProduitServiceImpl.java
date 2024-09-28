package com.salam.backend.service.impl;

import com.salam.backend.dto.ProduitDTO;
import com.salam.backend.mapper.ProduitMapper;
import com.salam.backend.model.Produit;
import com.salam.backend.repository.ProduitRepository;
import com.salam.backend.service.ProduitService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;


@Slf4j
@Service
@Transactional
public class ProduitServiceImpl implements ProduitService {

    private final ProduitRepository produitRepository;
    private final ProduitMapper produitMapper;

    public ProduitServiceImpl(ProduitRepository produitRepository, ProduitMapper produitMapper) {
        this.produitRepository = produitRepository;
        this.produitMapper = produitMapper;
    }

    @Override
    public ProduitDTO save(ProduitDTO produitDTO) {
        log.debug("Request to save Produit : {}", produitDTO);
        Produit produit = produitMapper.toEntity(produitDTO);
        produit = produitRepository.save(produit);
        return produitMapper.toDto(produit);
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
    public Optional<ProduitDTO> findOne(Integer id) {
        log.debug("Request to get Produit : {}", id);
        return produitRepository.findById(id)
                .map(produitMapper::toDto);
    }

    @Override
    public void delete(Integer id) {

    }
}
