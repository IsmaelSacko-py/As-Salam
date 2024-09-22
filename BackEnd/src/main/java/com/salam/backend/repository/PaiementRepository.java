package com.salam.backend.repository;

import com.salam.backend.model.Paiemement;
import com.salam.backend.model.Vendeur;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PaiementRepository extends JpaRepository<Paiemement, Integer> {
}
