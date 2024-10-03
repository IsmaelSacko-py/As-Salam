package com.salam.backend.repository;

import com.salam.backend.model.Adresse;
import com.salam.backend.model.Ville;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface VilleRepository extends JpaRepository<Ville, Integer> {
}
