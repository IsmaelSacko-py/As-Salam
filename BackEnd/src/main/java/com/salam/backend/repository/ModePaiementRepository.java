package com.salam.backend.repository;

import com.salam.backend.model.ModePaiement;
import com.salam.backend.model.Paiement;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ModePaiementRepository extends JpaRepository<ModePaiement, Integer> {
}
