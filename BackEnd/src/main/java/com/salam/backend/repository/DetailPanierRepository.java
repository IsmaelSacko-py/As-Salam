package com.salam.backend.repository;

import com.salam.backend.model.DetailPanier;
import com.salam.backend.model.Produit;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
public interface DetailPanierRepository extends JpaRepository<DetailPanier, Integer> {
    @Transactional
    @Modifying
    @Query("Delete from DetailPanier details where details.panier.id = ?1")
    void deleteByPanierId(int id);
}
