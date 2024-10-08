package com.salam.backend.repository;

import com.salam.backend.model.Administrateur;
import com.salam.backend.model.Utilisateur;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AdministrateurRepository<Entity extends Administrateur> extends UtilisateurRepository<Entity> {
//    Entity findByTelephone(String telephone);
}
