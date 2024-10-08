package com.salam.backend.repository;

import com.salam.backend.model.Recu;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FactureRepository extends JpaRepository<Recu, Integer> {
}
