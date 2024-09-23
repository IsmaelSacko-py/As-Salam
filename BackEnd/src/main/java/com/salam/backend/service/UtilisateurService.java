package com.salam.backend.service;

import com.salam.backend.dto.UtilisateurDTO;

import java.util.Optional;

public interface UtilisateurService extends RepositoryService<UtilisateurDTO> {
    Optional<UtilisateurDTO> findByEmail(String email);
    Optional<UtilisateurDTO> findByEmailAndPassword(String email, String password);
    Optional<UtilisateurDTO> updateProfile(UtilisateurDTO utilisateurDTO);
    int resetPassword(String newPassword);
}
