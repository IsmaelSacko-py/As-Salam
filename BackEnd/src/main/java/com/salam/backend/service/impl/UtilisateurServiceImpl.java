package com.salam.backend.service.impl;

import com.salam.backend.dto.ProfilDTO;
import com.salam.backend.dto.UtilisateurDTO;
import com.salam.backend.mapper.UtilisateurMapper;
import com.salam.backend.mapper.UtilisateurMapperImpl;
import com.salam.backend.model.Utilisateur;
import com.salam.backend.repository.UtilisateurRepository;
import com.salam.backend.service.UtilisateurService;
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
public class UtilisateurServiceImpl implements UtilisateurService {

    private final UtilisateurRepository utilisateurRepository;
    private final UtilisateurMapper utilisateurMapper;

    public UtilisateurServiceImpl(UtilisateurRepository utilisateurRepository, UtilisateurMapper utilisateurMapper) {
        this.utilisateurRepository = utilisateurRepository;
        this.utilisateurMapper = utilisateurMapper;
    }

    @Override
    public Optional<UtilisateurDTO> updateProfile(UtilisateurDTO utilisateurDTO) {
        return Optional.empty();
    }

    @Override
    public int resetPassword(String newPassword) {
        return 0;
    }

    @Override
    public UtilisateurDTO save(UtilisateurDTO utilisateurDTO) {
        log.debug("Request to save Utilisateur : {}", utilisateurDTO);
        Utilisateur utilisateur = utilisateurMapper.toEntity(utilisateurDTO);
        utilisateur = utilisateurRepository.save(utilisateur);
        return utilisateurMapper.toDto(utilisateur);
    }

    @Override
    public UtilisateurDTO update(UtilisateurDTO utilisateurDTO) {
        log.debug("Request to update Utilisateur : {}", utilisateurDTO);
        Utilisateur utilisateur = utilisateurMapper.toEntity(utilisateurDTO);
        utilisateur = utilisateurRepository.save(utilisateur);
        return utilisateurMapper.toDto(utilisateur);
    }

    @Override
    public Optional<UtilisateurDTO> partialUpdate(UtilisateurDTO utilisateurDTO) {
        log.debug("Request to partial update Utilisateur : {}", utilisateurDTO);
        return utilisateurRepository
                .findById(utilisateurDTO.getId())
                .map( existingUser -> {
                    utilisateurMapper.partialUpdate(existingUser, utilisateurDTO);
                    return existingUser;
                })
                .map(utilisateurRepository::save)
                .map(utilisateurMapper::toDto);
    }

    @Override
    public Page<UtilisateurDTO> findAll(Pageable pageable) {
        log.debug("Request to get all Utilisateurs");
        return utilisateurRepository.findAll(pageable).map(utilisateurMapper::toDto);
    }

    @Override
    public Optional<UtilisateurDTO> findOne(Integer id) {
        log.debug("Request to get Utilisateur : {}", id);
        return utilisateurRepository.findById(id)
                .map(utilisateurMapper::toDto);
    }

    @Override
    public void delete(Integer id) {
        log.debug("Request to delete Utilisateur : {}", id);
        utilisateurRepository
            .findById(id)
            .ifPresentOrElse(
                user -> {
                    utilisateurRepository.delete(user);
                    log.info("Utilisateur with id {} was deleted", id);
                }
            ,
            () -> {
                throw new EntityNotFoundException();
            }
        );

    }
}
