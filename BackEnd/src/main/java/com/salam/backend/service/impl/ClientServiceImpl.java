package com.salam.backend.service.impl;

import com.salam.backend.mapper.UtilisateurMapper;
import com.salam.backend.repository.UtilisateurRepository;
import com.salam.backend.service.ClientService;

public class ClientServiceImpl extends MembreServiceImpl implements ClientService {
    public ClientServiceImpl(UtilisateurRepository utilisateurRepository, UtilisateurMapper utilisateurMapper) {
        super(utilisateurRepository, utilisateurMapper);
    }
}
