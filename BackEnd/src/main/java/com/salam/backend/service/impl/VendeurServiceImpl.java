package com.salam.backend.service.impl;

import com.salam.backend.model.Vendeur;
import com.salam.backend.repository.UtilisateurRepository;
import com.salam.backend.repository.VendeurRepository;
import com.salam.backend.service.VendeurService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@Slf4j
@Service
public class VendeurServiceImpl extends ClientServiceImpl<Vendeur> implements VendeurService {

    public VendeurServiceImpl(VendeurRepository vendeurRepository) {
        super(vendeurRepository);
    }
}
