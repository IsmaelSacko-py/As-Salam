package com.salam.backend.repository;

import com.salam.backend.model.Categorie;
import com.salam.backend.model.Region;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CategorieRepository extends JpaRepository<Categorie, Integer> {
}
