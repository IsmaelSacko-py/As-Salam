package com.salam.backend.mapper;

import com.salam.backend.dto.CategorieDTO;
import com.salam.backend.dto.DetailPanierDTO;
import com.salam.backend.dto.ProduitDTO;
import com.salam.backend.model.Categorie;
import com.salam.backend.model.DetailPanier;
import com.salam.backend.model.Produit;
import org.mapstruct.BeanMapping;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Named;
import org.mapstruct.factory.Mappers;

import java.util.List;
import java.util.stream.Collectors;

@Mapper(componentModel = "spring")
public interface CategorieMapper {
    CategorieMapper INSTANCE = Mappers.getMapper(CategorieMapper.class);

    // Mapping Entité -> DTO
//    @Mapping(source = "parentCategorie", target = "parentCategorie")  // Catégorie parente
    @Mapping(source = "sousCategories", target = "sousCategories")  // Sous-catégories
    @Mapping(source = "produits", target = "produits")  // Produits liés à la catégorie
    CategorieDTO toDto(Categorie categorie);

    // Mapping DTO -> Entité
//    @Mapping(source = "parentCategorie", target = "parentCategorie")
    @Mapping(source = "sousCategories", target = "sousCategories")
    @Mapping(source = "produits", target = "produits")
    Categorie toEntity(CategorieDTO categorieDTO);;
}
