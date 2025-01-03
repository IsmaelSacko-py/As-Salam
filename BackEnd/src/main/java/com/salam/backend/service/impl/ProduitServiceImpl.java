package com.salam.backend.service.impl;

import com.salam.backend.enumeration.EtatProduit;
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
    public Produit save(Produit produit) {
        log.debug("Request to save Produit : {}", produit);
        String numProduit = UUID.randomUUID().toString().replace("-", "").substring(0, 10).toUpperCase();


        LocalDateTime instant= LocalDateTime.now();
        produit.setDateAjout(instant);
        produit.setNumero(numProduit);
        produit.setStatut(EtatProduit.ACTIF);

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
        return produit;
    }

    @Override
    public Produit update(Produit produit) {
        return null;
    }

    @Override
    public Optional<Produit> partialUpdate(Produit produit) {
        return Optional.empty();
    }

    @Override
    public Page<Produit> findAll(Pageable pageable) {
        log.debug("Request to get all Produits");
        return produitRepository.findAll(pageable);
    }

    @Override
    public Optional<Produit> findOne(Integer id) {
        log.debug("Request to get Produit : {}", id);
        return produitRepository.findById(id);
    }

    @Override
    public void delete(Integer id) {

    }


    @Override
    public Page<Produit> vendeurProducts(int vendeurId, Pageable pageable) {
        log.debug("Request to find all vendeur products");
        return produitRepository.findByVendeurId(vendeurId, pageable);
    }
}
