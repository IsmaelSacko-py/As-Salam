package com.salam.backend.service.impl;


import com.salam.backend.mapper.ClientMapper;
import com.salam.backend.mapper.UtilisateurMapper;
import com.salam.backend.model.Administrateur;
import com.salam.backend.model.Client;
import com.salam.backend.model.Vendeur;
import com.salam.backend.repository.AdministrateurRepository;
import com.salam.backend.repository.ClientRepository;
import com.salam.backend.repository.UtilisateurRepository;
import com.salam.backend.repository.VendeurRepository;
import com.salam.backend.service.AdministrateurService;
import com.salam.backend.service.UtilisateurService;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Optional;

@Slf4j
@Service

public class AdministrateurServiceImpl<Entity extends Administrateur> extends UtilisateurServiceImpl<Entity> implements AdministrateurService<Entity> {


    public AdministrateurServiceImpl(@Qualifier("utilisateurRepository") UtilisateurRepository<Entity> utilisateurRepository) {
        super(utilisateurRepository);
    }
}
