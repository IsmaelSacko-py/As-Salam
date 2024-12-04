package com.salam.backend.repository;

import com.salam.backend.model.Commande;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface CommandeRepository extends JpaRepository<Commande, Integer> {
    Page<Commande> getCommandeByClientIdOrderByDateDesc(int clientId, Pageable pageable);
    Page<Commande> getCommandeByVendeurIdOrderByDateDesc(int clientId, Pageable pageable);

}
