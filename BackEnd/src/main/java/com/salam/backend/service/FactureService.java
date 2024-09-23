package com.salam.backend.service;

import com.salam.backend.dto.FactureDTO;

public interface FactureService {
    void generareFacture(FactureDTO factureDTO);
    int envoyerFacture(FactureDTO factureDTO);
    double calculerontantTotal(FactureDTO factureDTO);
}
