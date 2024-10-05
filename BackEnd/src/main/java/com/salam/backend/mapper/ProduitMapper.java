package com.salam.backend.mapper;

import com.salam.backend.dto.AdministrateurDTO;
import com.salam.backend.dto.CategorieDTO;
import com.salam.backend.dto.ImageDTO;
import com.salam.backend.dto.ProduitDTO;
import com.salam.backend.model.Administrateur;
import com.salam.backend.model.Categorie;
import com.salam.backend.model.Image;
import com.salam.backend.model.Produit;
import org.mapstruct.*;
import org.mapstruct.factory.Mappers;

import java.util.List;

@Mapper(componentModel = "spring")
public interface ProduitMapper {

    ProduitMapper INSTANCE = Mappers.getMapper(ProduitMapper.class);

    // Mapping Entité -> DTO
    @Mapping(source = "categorie", target = "categorie")
    @Mapping(source = "detailsPanier", target = "detailsPanier")
    @Mapping(source = "detailsCommande", target = "detailsCommande")
    @Mapping(source = "images", target = "images")
    ProduitDTO toDto(Produit produit);

    // Mapping DTO -> Entité
    @Mapping(source = "categorie", target = "categorie")
    @Mapping(source = "detailsPanier", target = "detailsPanier")
    @Mapping(source = "detailsCommande", target = "detailsCommande")
    @Mapping(source = "images", target = "images")
    Produit toEntity(ProduitDTO produitDTO);
}
