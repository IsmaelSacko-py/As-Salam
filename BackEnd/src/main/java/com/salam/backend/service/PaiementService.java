package com.salam.backend.service;

import com.salam.backend.dto.ModePaiementDTO;
import com.salam.backend.dto.PaiementDTO;

public interface PaiementService {
    int effectuerPaiement(PaiementDTO paiementDTO, ModePaiementDTO modePaiementDTO, double montant);
    int validerPaiement(PaiementDTO paiementDTO);
    int annulerPaiement(PaiementDTO paiementDTO);
}
