package com.salam.backend.repository;

import com.salam.backend.enumeration.EtatCommande;
import com.salam.backend.model.Produit;
import com.salam.backend.model.Vendeur;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProduitRepository extends JpaRepository<Produit, Integer>, PagingAndSortingRepository<Produit, Integer> {
    Page<Produit> findByVendeurId(int vendeurId, Pageable pageable);
}
