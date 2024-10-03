package com.salam.backend.service.impl;

import com.salam.backend.model.Profil;
import com.salam.backend.repository.ProfilRepository;
import com.salam.backend.service.ProfilService;
import jakarta.persistence.EntityNotFoundException;
import jakarta.transaction.Transactional;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Slf4j
@Service
@Transactional
public class ProfilServiceImpl implements ProfilService {
    private final ProfilRepository profilRepository;

    public ProfilServiceImpl(ProfilRepository profilRepository) {
        this.profilRepository = profilRepository;
    }

    @Override
    public Profil save(Profil profil) {
        return null;
    }

    @Override
    public Profil update(Profil profil) {
        return null;
    }

    @Override
    public Optional<Profil> partialUpdate(Profil profil) {
        return Optional.empty();
    }

    @Override
    public Page<Profil> findAll(Pageable pageable) {
        return null;
    }

    @Override
    public Optional<Profil> findOne(Integer id) {
        return profilRepository.findById(id);

    }

    @Override
    public void delete(Integer id) {

    }
}
