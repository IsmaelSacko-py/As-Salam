package com.salam.backend.service.impl;

import com.salam.backend.model.Adresse;
import com.salam.backend.model.Client;
import com.salam.backend.model.Utilisateur;
import com.salam.backend.model.Ville;
import com.salam.backend.repository.AdresseRepository;
import com.salam.backend.service.AdresseService;
import jakarta.transaction.Transactional;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import javax.swing.text.html.Option;
import java.util.Optional;
import java.util.UUID;

@Slf4j
@Service
@Transactional
public class AdresseServiceImpl implements AdresseService {
    private final AdresseRepository adresseRepository;
//    private final UtilisateurServiceImpl utilisateurServiceImpl;
    private final VilleServiceImpl villeServiceImpl;
    private final ClientServiceImpl<Client> clientServiceImpl;

    public AdresseServiceImpl(AdresseRepository adresseRepository, VilleServiceImpl villeServiceImpl, ClientServiceImpl<Client> clientServiceImpl) {
        this.adresseRepository = adresseRepository;
        this.villeServiceImpl = villeServiceImpl;
        this.clientServiceImpl = clientServiceImpl;
    }

    @Override
    public Adresse save(Adresse adresse) {
        log.debug("Request to save Adresse : {}", adresse);

        String numAdresse = UUID.randomUUID().toString();

        Optional<Client> client = clientServiceImpl.findOne(1);
        Optional<Ville> ville = villeServiceImpl.findOne(1);

        log.info("client : {}", client);
        log.info("ville : {}", ville);

        adresse.setClient(client.get());
        adresse.setVille(ville.get());
        adresse.setNumero(numAdresse);
        return adresseRepository.save(adresse);
    }

    @Override
    public Adresse update(Adresse adresse) {
        return null;
    }

    @Override
    public Optional<Adresse> partialUpdate(Adresse adresse) {
        return Optional.empty();
    }

    @Override
    public Page<Adresse> findAll(Pageable pageable) {
        return adresseRepository.findAll(pageable);
    }

    @Override
    public Optional<Adresse> findOne(Integer id) {
        return Optional.empty();
    }

    @Override
    public void delete(Integer id) {

    }
}
