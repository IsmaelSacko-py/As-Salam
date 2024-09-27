package com.salam.backend.service;

import com.salam.backend.dto.RecuDTO;

public interface RecuService {
    RecuDTO generareRecu(RecuDTO recuDTO);
    RecuDTO envoyerRecu(RecuDTO recuDTO);
    double calculerontantTotal(RecuDTO recuDTO);
}
