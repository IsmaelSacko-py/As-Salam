package com.salam.backend.repository;

import com.salam.backend.model.Utilisateur;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UtilisateurRepository<Entity extends Utilisateur> extends JpaRepository<Entity, Integer> {
}
