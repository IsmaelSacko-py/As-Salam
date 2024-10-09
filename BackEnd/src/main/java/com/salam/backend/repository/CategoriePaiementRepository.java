package com.salam.backend.repository;

import com.salam.backend.model.CategoriePaiement;
import com.salam.backend.model.ModePaiement;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CategoriePaiementRepository extends JpaRepository<CategoriePaiement, Integer> {
}
