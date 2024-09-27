package com.salam.backend.service;

import com.salam.backend.dto.CommandeDTO;
import com.salam.backend.dto.PaiementDTO;
import com.salam.backend.dto.PanierDTO;
import com.salam.backend.dto.ProduitDTO;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface MembreService extends UtilisateurService{
    Page<CommandeDTO> getCommandes(Pageable pageable);
}
