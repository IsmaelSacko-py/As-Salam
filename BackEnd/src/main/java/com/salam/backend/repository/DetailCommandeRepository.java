package com.salam.backend.repository;

import com.salam.backend.model.DetailCommande;
import com.salam.backend.model.Vendeur;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DetailCommandeRepository extends JpaRepository<DetailCommande, Integer> {
}
