package com.salam.backend.service.impl;

import com.salam.backend.mapper.ClientMapper;
import com.salam.backend.mapper.UtilisateurMapper;
import com.salam.backend.model.Client;
import com.salam.backend.model.Vendeur;
import com.salam.backend.repository.ClientRepository;
import com.salam.backend.repository.UtilisateurRepository;
import com.salam.backend.repository.VendeurRepository;
import com.salam.backend.service.VendeurService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@Slf4j
@Service
public class VendeurServiceImpl extends ClientServiceImpl<Vendeur> implements VendeurService {


    private final VendeurRepository vendeurRepository;

    public VendeurServiceImpl(UtilisateurRepository<Vendeur> utilisateurRepository, ClientRepository<Client> clientRepository, VendeurRepository vendeurRepository) {
        super(utilisateurRepository, clientRepository);
        this.vendeurRepository = vendeurRepository;
    }


//    @Override
//    public Vendeur save(Vendeur vendeur) {
//        log.debug("Request to save Vendeur : {}", vendeur);
//        return vendeurRepository.save(vendeur);
//    }
}
