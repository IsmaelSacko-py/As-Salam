package com.salam.backend.repository;

import com.salam.backend.model.Facture;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ImageRepository extends JpaRepository<Facture, Integer> {
}
