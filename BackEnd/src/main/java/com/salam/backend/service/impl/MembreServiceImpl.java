package com.salam.backend.service.impl;

import com.salam.backend.dto.CommandeDTO;
import com.salam.backend.dto.PaiementDTO;
import com.salam.backend.dto.PanierDTO;
import com.salam.backend.dto.ProduitDTO;
import com.salam.backend.service.MembreService;

public class MembreServiceImpl extends UtilisateurServiceImpl implements MembreService{
    @Override
    public void ajouterAuPanier(ProduitDTO produitDTO, int quantite) {

    }

    @Override
    public int annulerCommande(CommandeDTO commandeDTO) {
        return 0;
    }

    @Override
    public int retireDuPanier(ProduitDTO produitDTO) {
        return 0;
    }

    @Override
    public void commander(PanierDTO panierDTO) {

    }

    @Override
    public void effectuerPaiement(CommandeDTO commandeDTO, PaiementDTO paiementDTO) {

    }
}
