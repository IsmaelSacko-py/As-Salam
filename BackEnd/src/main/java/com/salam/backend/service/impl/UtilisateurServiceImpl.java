package com.salam.backend.service.impl;

import com.salam.backend.dto.UtilisateurDTO;
import com.salam.backend.service.UtilisateurService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.Optional;

public class UtilisateurServiceImpl implements UtilisateurService {
    @Override
    public Optional<UtilisateurDTO> findByEmail(String email) {
        return Optional.empty();
    }

    @Override
    public Optional<UtilisateurDTO> findByEmailAndPassword(String email, String password) {
        return Optional.empty();
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
        return null;
    }

    @Override
    public UtilisateurDTO update(UtilisateurDTO utilisateurDTO) {
        return null;
    }

    @Override
    public Optional<UtilisateurDTO> partialUpdate(UtilisateurDTO utilisateurDTO) {
        return Optional.empty();
    }

    @Override
    public Page<UtilisateurDTO> findAll(Pageable pageable) {
        return null;
    }

    @Override
    public Optional<UtilisateurDTO> findOne(Long id) {
        return Optional.empty();
    }

    @Override
    public void delete(Long id) {

    }
}
