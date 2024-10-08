package com.salam.backend.service.impl;

import com.salam.backend.mapper.RegionMapper;
import com.salam.backend.model.Region;
import com.salam.backend.repository.RegionRepository;
import com.salam.backend.service.RegionService;
import com.salam.backend.service.RegionService;
import jakarta.transaction.Transactional;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Slf4j
@Service
@Transactional
public class RegionServiceImpl implements RegionService {
    private final RegionRepository regionRepository;
    private final RegionMapper regionMapper;

    public RegionServiceImpl(RegionRepository regionRepository, RegionMapper regionMapper) {
        this.regionRepository = regionRepository;
        this.regionMapper = regionMapper;
    }

    @Override
    public Region save(Region region) {
        log.debug("Request to save Region : {}", region);
        return regionRepository.save(region);
    }

    @Override
    public Region update(Region region) {
        return null;
    }

    @Override
    public Optional<Region> partialUpdate(Region region) {
        return Optional.empty();
    }

    @Override
    public Page<Region> findAll(Pageable pageable) {
        log.debug("Request to get all Regions");
        return regionRepository.findAll(pageable);
    }

    @Override
    public Optional<Region> findOne(Integer id) {
        log.debug("Request to get Region : {}", id);
        return regionRepository.findById(id);
    }

    @Override
    public void delete(Integer id) {

    }
}
