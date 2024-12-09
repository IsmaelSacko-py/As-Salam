package com.salam.backend.service;

import com.salam.backend.dto.ProduitDTO;
import com.salam.backend.model.Produit;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface ProduitService extends CentralRepositoryService<Produit> {
    Page<Produit> vendeurProducts(int vendeurId, Pageable pageable);
}
