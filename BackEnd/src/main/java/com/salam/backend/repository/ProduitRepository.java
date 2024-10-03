package com.salam.backend.repository;

import com.salam.backend.model.Produit;
import com.salam.backend.model.Vendeur;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProduitRepository extends JpaRepository<Produit, Integer>, PagingAndSortingRepository<Produit, Integer> {
}
