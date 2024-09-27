package com.salam.backend.service.impl;

import com.salam.backend.dto.CommandeDTO;
import com.salam.backend.dto.PaiementDTO;
import com.salam.backend.dto.PanierDTO;
import com.salam.backend.dto.ProduitDTO;
import com.salam.backend.service.MembreService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public class MembreServiceImpl extends UtilisateurServiceImpl implements MembreService{

    @Override
    public Page<CommandeDTO> getCommandes(Pageable pageable) {
        return null;
    }
}
