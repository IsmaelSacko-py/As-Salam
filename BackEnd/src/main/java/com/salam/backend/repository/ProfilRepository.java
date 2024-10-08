package com.salam.backend.repository;

import com.salam.backend.model.Panier;
import com.salam.backend.model.Profil;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface ProfilRepository extends JpaRepository<Profil, Integer> {
    @Query("select profil from Profil profil where profil.id in (2, 3)")
    Page<Profil> findMemberProfil(Pageable pageable);
}
