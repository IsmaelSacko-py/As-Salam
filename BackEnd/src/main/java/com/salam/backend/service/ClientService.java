package com.salam.backend.service;

import com.salam.backend.model.Client;
import com.salam.backend.model.Commande;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface ClientService<Entity extends Client> extends UtilisateurService<Entity> {
    Page<Commande> getCommandes(Pageable pageable);
}
