package com.salam.backend.service;

import com.salam.backend.dto.ModePaiementDTO;
import com.salam.backend.dto.PaiementDTO;
import com.salam.backend.model.Paiement;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PaiementService extends CentralRepositoryService<Paiement> {
    int effectuerPaiement(PaiementDTO paiementDTO, ModePaiementDTO modePaiementDTO, double montant);
    int validerPaiement(PaiementDTO paiementDTO);
    int annulerPaiement(PaiementDTO paiementDTO);
}
