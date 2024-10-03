package com.salam.backend.service.impl;

import com.salam.backend.dto.PanierDTO;
import com.salam.backend.model.Ville;
import com.salam.backend.repository.VilleRepository;
import com.salam.backend.service.PanierService;
import com.salam.backend.service.VilleService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Slf4j
@Service
@Transactional
public class VilleServiceImpl implements VilleService {

    private final VilleRepository villeRepository;

    public VilleServiceImpl(VilleRepository villeRepository) {
        this.villeRepository = villeRepository;
    }

    @Override
    public Ville save(Ville ville) {
        return null;
    }

    @Override
    public Ville update(Ville ville) {
        return null;
    }

    @Override
    public Optional<Ville> partialUpdate(Ville ville) {
        return Optional.empty();
    }

    @Override
    public Page<Ville> findAll(Pageable pageable) {
        return null;
    }

    @Override
    public Optional<Ville> findOne(Integer id) {
        return villeRepository.findById(id);
    }

    @Override
    public void delete(Integer id) {

    }
}
