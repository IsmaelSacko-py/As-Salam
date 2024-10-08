package com.salam.backend.service.impl;

import com.salam.backend.mapper.ClientMapper;
import com.salam.backend.mapper.UtilisateurMapper;
import com.salam.backend.model.Client;
import com.salam.backend.model.Commande;
import com.salam.backend.model.Utilisateur;
import com.salam.backend.repository.ClientRepository;
import com.salam.backend.repository.UtilisateurRepository;
import com.salam.backend.service.ClientService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Slf4j
@Service
public class ClientServiceImpl<Entity extends Client> extends UtilisateurServiceImpl<Entity> implements ClientService<Entity> {

    private final ClientRepository<Client> clientRepository;

    public ClientServiceImpl(@Qualifier("utilisateurRepository") UtilisateurRepository<Entity> utilisateurRepository, ClientRepository<Client> clientRepository) {
        super(utilisateurRepository);
        this.clientRepository = clientRepository;
    }


    @Override
    public Page<Commande> getCommandes(Pageable pageable) {
        return null;
    }

//    @Override
//    public Entity save(Entity entity) {
//        log.debug("Save entity: {}", entity);
//        return clientRepository.save(entity);
//    }
}
