package com.salam.backend.service.impl;

import com.salam.backend.dto.CommandeDTO;
import com.salam.backend.dto.PaiementDTO;
import com.salam.backend.dto.PanierDTO;
import com.salam.backend.dto.ProduitDTO;
import com.salam.backend.mapper.UtilisateurMapper;
import com.salam.backend.repository.UtilisateurRepository;
import com.salam.backend.service.MembreService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public class MembreServiceImpl extends UtilisateurServiceImpl implements MembreService{

    public MembreServiceImpl(UtilisateurRepository utilisateurRepository, UtilisateurMapper utilisateurMapper) {
        super(utilisateurRepository, utilisateurMapper);

    }

    @Override
    public Page<CommandeDTO> getCommandes(Pageable pageable) {
        return null;
    }
}
