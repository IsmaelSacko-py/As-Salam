package com.salam.backend.service.impl;

import com.salam.backend.dto.ClientDTO;
import com.salam.backend.dto.VilleDTO;
import com.salam.backend.mapper.AdresseMapper;
import com.salam.backend.mapper.ClientMapper;
import com.salam.backend.mapper.VilleMapper;
import com.salam.backend.model.Adresse;
import com.salam.backend.model.Client;
import com.salam.backend.model.Utilisateur;
import com.salam.backend.model.Ville;
import com.salam.backend.repository.AdresseRepository;
import com.salam.backend.service.AdresseService;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
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
@RequiredArgsConstructor
public class AdresseServiceImpl implements AdresseService {
    private final AdresseRepository adresseRepository;
//    private final UtilisateurServiceImpl utilisateurServiceImpl;
    private final VilleServiceImpl villeServiceImpl;
    private final ClientServiceImpl<Client> clientServiceImpl;
    private final AdresseMapper adresseMapper;
    private final VilleMapper villeMapper;
    private final ClientMapper clientMapper;


    @Override
    public Adresse save(Adresse adresse) {
        log.debug("Request to save Adresse : {}", adresse);

        String numAdresse = UUID.randomUUID().toString();

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
        log.debug("Request to get all Adresses");
        return adresseRepository.findAll(pageable);
    }

    @Override
    public Optional<Adresse> findOne(Integer id) {
        return adresseRepository.findById(id);
    }

    @Override
    public void delete(Integer id) {

    }
}
