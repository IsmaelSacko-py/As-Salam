package com.salam.backend.service.impl;

import com.salam.backend.model.Commande;
import com.salam.backend.repository.CommandeRepository;
import com.salam.backend.service.CommandeService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@Slf4j
@Transactional
@RequiredArgsConstructor
public class CommandeServiceImpl implements CommandeService {

    private final CommandeRepository commandeRepository;

    @Override
    public Commande annullerCommande(Commande commande) {
        return null;
    }


    @Override
    public Commande mettreAJourStatus(Commande commande) {
        return null;
    }

    @Override
    public double calculerMontantTotal(Commande commande) {
        return 0;
    }

    @Override
    public Page<Commande> getCommandeByClientId(int clientId, Pageable pageable) {
        log.debug("Request to get commandes client by id : {}", clientId);
        return commandeRepository.getCommandeByClientIdOrderByDateDesc(clientId, pageable);
    }


    @Override
    public Commande save(Commande commande) {
        log.debug("Request to save commande {}", commande);
        return commandeRepository.save(commande);
    }

    @Override
    public Commande update(Commande commande) {
        log.debug("Request to update commande {}", commande);
        return commandeRepository.save(commande);
    }

    @Override
    public Optional<Commande> partialUpdate(Commande commande) {
        return Optional.empty();
    }

    @Override
    public Page<Commande> findAll(Pageable pageable) {
        return null;
    }

    @Override
    public Optional<Commande> findOne(Integer id) {
        return Optional.empty();
    }

    @Override
    public void delete(Integer id) {

    }
}
