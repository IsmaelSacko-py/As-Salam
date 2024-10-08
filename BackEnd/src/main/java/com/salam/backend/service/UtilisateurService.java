package com.salam.backend.service;

import com.salam.backend.model.Utilisateur;

import java.util.Optional;

public interface UtilisateurService<Entity extends Utilisateur> extends CentralRepositoryService<Entity> {
    Optional<Entity> updateProfile(Entity entity);
    int resetPassword(String newPassword);
    Entity findByTelephone(String telephone);
}
