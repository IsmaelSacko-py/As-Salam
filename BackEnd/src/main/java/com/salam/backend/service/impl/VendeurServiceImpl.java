package com.salam.backend.service.impl;

import com.salam.backend.dto.ProduitDTO;
import com.salam.backend.mapper.UtilisateurMapper;
import com.salam.backend.repository.UtilisateurRepository;
import com.salam.backend.service.VendeurService;

public class VendeurServiceImpl extends MembreServiceImpl implements VendeurService {

    public VendeurServiceImpl(UtilisateurRepository utilisateurRepository, UtilisateurMapper utilisateurMapper) {
        super(utilisateurRepository, utilisateurMapper);
    }
}
