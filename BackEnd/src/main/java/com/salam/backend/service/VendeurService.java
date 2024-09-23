package com.salam.backend.service;

import com.salam.backend.dto.ProduitDTO;

public interface VendeurService extends MembreService{
    int mettreAJourStck(int quantite);
    int ajouterProduit(ProduitDTO produitDTO);
    int modifierProduit(ProduitDTO produitDTO);
    int supprimerProduit(int id);
}
