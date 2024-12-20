package com.salam.backend.service.impl;

import com.salam.backend.model.Utilisateur;
import com.salam.backend.repository.UtilisateurRepository;
import com.salam.backend.service.UtilisateurService;
import jakarta.transaction.Transactional;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Slf4j
@Transactional
@Service
public class UtilisateurServiceImpl<Entity extends Utilisateur> implements UtilisateurService<Entity>{

    private final UtilisateurRepository<Entity> utilisateurRepository;

    public UtilisateurServiceImpl(UtilisateurRepository<Entity> utilisateurRepository) {
        this.utilisateurRepository = utilisateurRepository;
    }
//
//    public UtilisateurServiceImpl(UtilisateurRepository<Entity> utilisateurRepository) {
//        this.utilisateurRepository = utilisateurRepository;
//    }
//    private final UtilisateurMapper utilisateurMapper;

    @Override
    public Optional<Entity> updateProfile(Entity entity) {
        return Optional.empty();
    }

    @Override
    public int resetPassword(String newPassword) {
        return 0;
    }

//    @Query("select user from Utilisateur user where user")
    @Override
    public Entity findByTelephone(String telephone) {
        log.debug("Request to find entite by telephone : {}", telephone);
        return utilisateurRepository.findByTelephone(telephone);
    }

    @Override
    public Entity save(Entity entity) {
        log.debug("Request to save entity: {}", entity);
        return utilisateurRepository.save(entity);
    }

    @Override
    public Entity update(Entity entity) {
        return null;
    }

    @Override
    public Optional<Entity> partialUpdate(Entity entity) {
        return Optional.empty();
    }

    @Override
    public Page<Entity> findAll(Pageable pageable) {
        log.debug("Request to get all entities");
        return utilisateurRepository.findAll(pageable);
    }

    @Override
    public Optional<Entity> findOne(Integer id) {
        log.debug("Request to find entity by id: {}", id);
        return utilisateurRepository.findById(id);
    }

    @Override
    public void delete(Integer id) {

    }
}
