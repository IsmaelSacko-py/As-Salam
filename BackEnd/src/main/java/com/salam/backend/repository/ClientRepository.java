package com.salam.backend.repository;

import com.salam.backend.model.Client;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ClientRepository<Entity extends Client> extends UtilisateurRepository<Entity> {
}
