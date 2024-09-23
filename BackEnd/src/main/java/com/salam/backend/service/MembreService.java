package com.salam.backend.service;

import com.salam.backend.dto.CommandeDTO;
import com.salam.backend.dto.PaiementDTO;
import com.salam.backend.dto.PanierDTO;
import com.salam.backend.dto.ProduitDTO;

import java.util.List;

public interface MembreService extends UtilisateurService{
    void ajouterAuPanier(ProduitDTO produitDTO, int quantite);
    int annulerCommande(CommandeDTO commandeDTO);
    int retireDuPanier(ProduitDTO produitDTO);
    void commander(PanierDTO panierDTO);
    void effectuerPaiement(CommandeDTO commandeDTO, PaiementDTO paiementDTO);
}
