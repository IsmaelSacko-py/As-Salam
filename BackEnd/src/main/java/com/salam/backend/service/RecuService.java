package com.salam.backend.service;

import com.salam.backend.dto.RecuDTO;
import com.salam.backend.model.Recu;

public interface RecuService {
    Recu generareRecu(Recu recu);
    Recu envoyerRecu(Recu recu);
    double calculerontantTotal(Recu recu);
}
