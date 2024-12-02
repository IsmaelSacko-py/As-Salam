package com.salam.backend.service.impl;

import com.salam.backend.model.MessageChatBot;
import com.salam.backend.model.ModePaiement;
import com.salam.backend.repository.ModePaiementRepository;
import com.salam.backend.service.MessageChatBotService;
import com.salam.backend.service.ModePaiementService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@Slf4j
@RequiredArgsConstructor
public class ModePaiementServiceImpl implements ModePaiementService {

    private final ModePaiementRepository modePaiementRepository;

    @Override
    public ModePaiement save(ModePaiement modePaiement) {
        return null;
    }

    @Override
    public ModePaiement update(ModePaiement modePaiement) {
        return null;
    }

    @Override
    public Optional<ModePaiement> partialUpdate(ModePaiement modePaiement) {
        return Optional.empty();
    }

    @Override
    public Page<ModePaiement> findAll(Pageable pageable) {
        log.debug("Request to get all ModePaiements");
        return modePaiementRepository.findAll(pageable);
    }

    @Override
    public Optional<ModePaiement> findOne(Integer id) {
        log.debug("Request to get ModePaiement: {}", id);
        return modePaiementRepository.findById(id);
    }

    @Override
    public void delete(Integer id) {

    }
}
