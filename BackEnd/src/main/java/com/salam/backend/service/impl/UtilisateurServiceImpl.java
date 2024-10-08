package com.salam.backend.service.impl;

import com.salam.backend.dto.VendeurDTO;
import com.salam.backend.mapper.ClientMapper;
import com.salam.backend.mapper.UtilisateurMapper;
import com.salam.backend.mapper.UtilisateurMapperImpl;
import com.salam.backend.model.Administrateur;
import com.salam.backend.model.Client;
import com.salam.backend.model.Utilisateur;
import com.salam.backend.model.Vendeur;
import com.salam.backend.repository.AdministrateurRepository;
import com.salam.backend.repository.ClientRepository;
import com.salam.backend.repository.UtilisateurRepository;
import com.salam.backend.repository.VendeurRepository;
import com.salam.backend.service.UtilisateurService;
import jakarta.persistence.EntityNotFoundException;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
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
        return utilisateurRepository.findByTelephone(telephone);
    }

    @Override
    public Entity save(Entity entity) {
        log.debug("Saving entity: {}", entity);
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
        return null;
    }

    @Override
    public Optional<Entity> findOne(Integer id) {
        return Optional.empty();
    }

    @Override
    public void delete(Integer id) {

    }
}
