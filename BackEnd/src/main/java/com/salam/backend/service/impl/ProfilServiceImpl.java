package com.salam.backend.service.impl;

import com.salam.backend.dto.ProfilDTO;
import com.salam.backend.mapper.ProfilMapper;
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
    private final ProfilMapper profilMapper;

    public ProfilServiceImpl(ProfilRepository profilRepository, ProfilMapper profilMapper) {
        this.profilRepository = profilRepository;
        this.profilMapper = profilMapper;
    }

    @Override
    public ProfilDTO save(ProfilDTO profilDTO) {
        return null;
    }

    @Override
    public ProfilDTO update(ProfilDTO profilDTO) {
        return null;
    }

    @Override
    public Optional<ProfilDTO> partialUpdate(ProfilDTO profilDTO) {
        return Optional.empty();
    }

    @Override
    public Page<ProfilDTO> findAll(Pageable pageable) {
        return null;
    }

    @Override
    public Optional<ProfilDTO> findOne(Integer id) {
        return profilRepository.findById(id)
                .map(profilMapper::toDto);

    }

    @Override
    public void delete(Integer id) {

    }
}
