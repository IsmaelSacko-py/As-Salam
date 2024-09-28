package com.salam.backend.repository;

import com.salam.backend.model.Client;
import com.salam.backend.model.Profil;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProfilRepository extends JpaRepository<Profil, Integer> {
}
