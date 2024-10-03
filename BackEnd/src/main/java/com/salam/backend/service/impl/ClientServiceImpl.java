package com.salam.backend.service.impl;

import com.salam.backend.model.Client;
import com.salam.backend.model.Commande;
import com.salam.backend.model.Utilisateur;
import com.salam.backend.repository.ClientRepository;
import com.salam.backend.service.ClientService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Slf4j
@Service
public class ClientServiceImpl<Entity extends Client> extends UtilisateurServiceImpl<Entity> implements ClientService<Entity> {
    public ClientServiceImpl(ClientRepository<Entity> clientRepository) {
        super(clientRepository);
    }

    @Override
    public Page<Commande> getCommandes(Pageable pageable) {
        return null;
    }
}
