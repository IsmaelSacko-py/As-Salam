package com.salam.backend.repository;

import com.salam.backend.model.DetailPanier;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DetailPanierRepository extends JpaRepository<DetailPanier, Integer> {
}
