package com.salam.backend.service.impl;

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
public class UtilisateurServiceImpl<Entity extends Utilisateur> implements UtilisateurService<Entity> {

    private final UtilisateurRepository<Entity> utilisateurRepository;
//    private final UtilisateurMapper utilisateurMapper;

    public UtilisateurServiceImpl(UtilisateurRepository<Entity> utilisateurRepository) {
        this.utilisateurRepository = utilisateurRepository;
    }

    @Override
    public Optional<Entity> updateProfile(Entity utilisateur) {
        return Optional.empty();
    }

    @Override
    public int resetPassword(String newPassword) {
        return 0;
    }

    @Override
    public Entity save(Entity utilisateur) {
        log.debug("Request to save Utilisateur : {}", utilisateur);
//        Utilisateur utilisateur = utilisateurMapper.toEntity(utilisateur);
        utilisateur = utilisateurRepository.save(utilisateur);
        return utilisateur;
    }

    @Override
    public Entity update(Entity utilisateur) {
        log.debug("Request to update Utilisateur : {}", utilisateur);
//        Utilisateur utilisateur = utilisateurMapper.toEntity(utilisateur);
        utilisateur = utilisateurRepository.save(utilisateur);
        return utilisateur;
    }

    @Override
    public Optional<Entity> partialUpdate(Entity utilisateur) {
        log.debug("Request to partial update Utilisateur : {}", utilisateur);
        return utilisateurRepository
                .findById(utilisateur.getId())
                .map( existingUser -> {
                    utilisateurRepository.save(utilisateur);
                    return existingUser;
                })
                .map(utilisateurRepository::save);
    }

    @Override
    public Page<Entity> findAll(Pageable pageable) {
        log.debug("Request to get all Utilisateurs");
        return utilisateurRepository.findAll(pageable);
    }

    @Override
    public Optional<Entity> findOne(Integer id) {
        log.debug("Request to get Utilisateur : {}", id);
        return utilisateurRepository.findById(id);
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
