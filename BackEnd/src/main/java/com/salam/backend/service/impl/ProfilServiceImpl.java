package com.salam.backend.service.impl;

import com.salam.backend.model.Profil;
import com.salam.backend.repository.ProfilRepository;
import com.salam.backend.repository.ProfilRepository;
import com.salam.backend.service.ProfilService;
import com.salam.backend.service.ProfilService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Slf4j
@Service
@Transactional
public class ProfilServiceImpl implements ProfilService {
    private final ProfilRepository profilRepository;
//    private final ProfilMapper imageMapper;

    public ProfilServiceImpl(ProfilRepository profilRepository) {
        this.profilRepository = profilRepository;
    }

    @Override
    public Profil save(Profil image) {
        log.debug("Request to save Profil : {}", image);
//        Profil image = imageMapper.toEntity(image);
        image = profilRepository.save(image);
        return image;
    }

    @Override
    public Profil update(Profil image) {
        return null;
    }

    @Override
    public Optional<Profil> partialUpdate(Profil image) {
        return Optional.empty();
    }

    @Override
    public Page<Profil> findAll(Pageable pageable) {
        log.debug("Request to get all Profils");
        return profilRepository.findAll(pageable);
    }

    public Page<Profil> findMemberProfil(Pageable pageable) {
        log.debug("Request to find member profil");
        return profilRepository.findMemberProfil(pageable);
    }

    @Override
    public Optional<Profil> findOne(Integer id) {
        return Optional.empty();
    }

    @Override
    public void delete(Integer id) {

    }
}
