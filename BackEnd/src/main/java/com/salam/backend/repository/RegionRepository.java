package com.salam.backend.repository;

import com.salam.backend.model.Adresse;
import com.salam.backend.model.Region;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RegionRepository extends JpaRepository<Region, Integer> {
}
