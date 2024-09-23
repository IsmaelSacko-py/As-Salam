package com.salam.backend.service.impl;

import com.salam.backend.dto.ModePaiementDTO;
import com.salam.backend.dto.PaiementDTO;
import com.salam.backend.service.PaiementService;

public class PaiementServiceImpl implements PaiementService {
    @Override
    public int effectuerPaiement(PaiementDTO paiementDTO, ModePaiementDTO modePaiementDTO, double montant) {
        return 0;
    }

    @Override
    public int validerPaiement(PaiementDTO paiementDTO) {
        return 0;
    }

    @Override
    public int annulerPaiement(PaiementDTO paiementDTO) {
        return 0;
    }
}
