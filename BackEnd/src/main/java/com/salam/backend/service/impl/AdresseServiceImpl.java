package com.salam.backend.service.impl;

import com.salam.backend.dto.AdresseDTO;
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
    private final AdresseMapper adresseMapper;
    private final VilleMapper villeMapper;
    private final ClientMapper clientMapper;

    public AdresseServiceImpl(AdresseRepository adresseRepository, VilleServiceImpl villeServiceImpl, ClientServiceImpl<Client> clientServiceImpl, AdresseMapper adresseMapper, VilleMapper villeMapper, ClientMapper clientMapper) {
        this.adresseRepository = adresseRepository;
        this.villeServiceImpl = villeServiceImpl;
        this.clientServiceImpl = clientServiceImpl;
        this.adresseMapper = adresseMapper;
        this.villeMapper = villeMapper;
        this.clientMapper = clientMapper;
    }

    @Override
    public AdresseDTO save(AdresseDTO adresseDTO) {
        log.debug("Request to save Adresse : {}", adresseDTO);
        Adresse adresse = adresseMapper.toEntity(adresseDTO);

        String numAdresse = UUID.randomUUID().toString();

        Optional<Client> client = clientServiceImpl.findOne(1);
        Optional<Ville> ville = villeServiceImpl.findOne(1);

        log.info("client : {}", client);
        log.info("ville : {}", ville);

        adresse.setClient(client.get());
        adresse.setVille(ville.get());
        adresse.setNumero(numAdresse);

        adresse =  adresseRepository.save(adresse);
        return adresseMapper.toDto(adresse);
    }

    @Override
    public AdresseDTO update(AdresseDTO adresseDTO) {
        return null;
    }

    @Override
    public Optional<AdresseDTO> partialUpdate(AdresseDTO adresseDTO) {
        return Optional.empty();
    }

    @Override
    public Page<AdresseDTO> findAll(Pageable pageable) {
        log.debug("Request to get all Adresses");
        return adresseRepository.findAll(pageable).map(adresseMapper::toDto);
    }

    @Override
    public Optional<AdresseDTO> findOne(Integer id) {
        return adresseRepository.findById(id).map(adresseMapper::toDto);
    }

    @Override
    public void delete(Integer id) {

    }
}
