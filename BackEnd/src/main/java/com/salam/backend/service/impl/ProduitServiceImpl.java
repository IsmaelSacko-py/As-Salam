package com.salam.backend.service.impl;

import com.salam.backend.dto.ProduitDTO;
import com.salam.backend.mapper.ImageMapper;
import com.salam.backend.mapper.ProduitMapper;
import com.salam.backend.model.Image;
import com.salam.backend.model.Produit;
import com.salam.backend.repository.ImageRepository;
import com.salam.backend.repository.ProduitRepository;
import com.salam.backend.service.ImageService;
import com.salam.backend.service.ProduitService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.time.LocalDateTime;
import java.util.Optional;
import java.util.UUID;


@Slf4j
@Service
@Transactional
public class ProduitServiceImpl implements ProduitService {

    private final ProduitRepository produitRepository;
    private final ImageServiceImpl imageService;
    private final ProduitMapper produitMapper;
    private final ImageMapper imageMapper;

    @Value("${file_upload.upload_dir}")
    private String UPLOAD_DIR;

    public ProduitServiceImpl(ProduitRepository produitRepository, ImageServiceImpl imageService, ProduitMapper produitMapper, ImageMapper imageMapper) {
        this.produitRepository = produitRepository;
        this.imageService = imageService;
        this.produitMapper = produitMapper;
        this.imageMapper = imageMapper;
    }

    @Override
    public ProduitDTO save(ProduitDTO produitDTO) {
        log.debug("Request to save Produit : {}", produitDTO);
        String numProduit = UUID.randomUUID().toString();

        Produit produit = produitMapper.toEntity(produitDTO);

        LocalDateTime instant= LocalDateTime.now();
        produit.setDateAjout(instant);
        produit.setNumero(numProduit);

        produit = produitRepository.save(produit);

        try {
            // Enregistrement des images du produit
            for (Image image : produit.getImages()) {

                log.debug("Saving image : {}", image);

                image.setProduit(produit);
                imageService.save(image);
            }
        }catch (Exception e){
            log.debug("Error saving Produit : {}", produit);
        }

//        Produit produit = produitMapper.toEntity(produit);
        return produitMapper.toDto(produit);
    }

    @Override
    public ProduitDTO update(ProduitDTO produit) {
        return null;
    }

    @Override
    public Optional<ProduitDTO> partialUpdate(ProduitDTO produit) {
        return Optional.empty();
    }

    @Override
    public Page<ProduitDTO> findAll(Pageable pageable) {
        return produitRepository.findAll(pageable).map(produitMapper::toDto);
    }

    @Override
    public Optional<ProduitDTO> findOne(Integer id) {
        log.debug("Request to get Produit : {}", id);
        return produitRepository.findById(id).map(produitMapper::toDto);
    }

    @Override
    public void delete(Integer id) {

    }
}
