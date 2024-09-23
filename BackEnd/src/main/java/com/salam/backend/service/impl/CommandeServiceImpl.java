package com.salam.backend.service.impl;

import com.salam.backend.dto.CommandeDTO;
import com.salam.backend.dto.DetailCommandeDTO;
import com.salam.backend.service.CommandeService;

public class CommandeServiceImpl implements CommandeService {
    @Override
    public int validerCommande(CommandeDTO commandeDTO) {
        return 0;
    }

    @Override
    public int annullerCommande(CommandeDTO commandeDTO) {
        return 0;
    }

    @Override
    public int ajouterDetailsCommande(DetailCommandeDTO detailCommandeDTO) {
        return 0;
    }

    @Override
    public int retirerDetailsCommande(DetailCommandeDTO detailCommandeDTO) {
        return 0;
    }

    @Override
    public int mettreAJourStatus(CommandeDTO commandeDTO) {
        return 0;
    }

    @Override
    public double calculerMontantTotal(CommandeDTO commandeDTO) {
        return 0;
    }
}
