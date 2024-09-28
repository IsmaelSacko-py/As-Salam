package com.salam.backend.service;

import com.salam.backend.dto.UtilisateurDTO;

import java.util.Optional;

public interface UtilisateurService extends CentralRepositoryService<UtilisateurDTO> {
    Optional<UtilisateurDTO> updateProfile(UtilisateurDTO utilisateurDTO);
    int resetPassword(String newPassword);
}
