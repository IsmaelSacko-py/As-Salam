package com.salam.backend.service;

import com.salam.backend.dto.RegionDTO;
import com.salam.backend.model.Adresse;
import com.salam.backend.model.Region;
import org.springframework.stereotype.Service;

@Service
public interface RegionService extends CentralRepositoryService<Region> {
}
