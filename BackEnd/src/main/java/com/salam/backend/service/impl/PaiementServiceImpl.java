package com.salam.backend.service.impl;

import com.salam.backend.dto.ModePaiementDTO;
import com.salam.backend.dto.PaiementDTO;
import com.salam.backend.model.Paiement;
import com.salam.backend.repository.PaiementRepository;
import com.salam.backend.service.PaiementService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Slf4j
@Service
@RequiredArgsConstructor
public class PaiementServiceImpl implements PaiementService {
    private final PaiementRepository paiementRepository;

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

    @Override
    public Paiement save(Paiement paiement) {
        log.debug("Request to save Paiement : {}", paiement);
        return paiementRepository.save(paiement);
    }

    @Override
    public Paiement update(Paiement paiement) {
        return null;
    }

    @Override
    public Optional<Paiement> partialUpdate(Paiement paiement) {
        return Optional.empty();
    }

    @Override
    public Page<Paiement> findAll(Pageable pageable) {
        return null;
    }

    @Override
    public Optional<Paiement> findOne(Integer id) {
        return Optional.empty();
    }

    @Override
    public void delete(Integer id) {

    }
}
