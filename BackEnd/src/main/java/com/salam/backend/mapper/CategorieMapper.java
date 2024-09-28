package com.salam.backend.mapper;

import com.salam.backend.dto.CategorieDTO;
import com.salam.backend.dto.DetailPanierDTO;
import com.salam.backend.model.Categorie;
import com.salam.backend.model.DetailPanier;
import com.salam.backend.model.Produit;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import java.util.List;
import java.util.stream.Collectors;

@Mapper(componentModel = "spring", uses = {ProduitMapper.class})
public interface CategorieMapper {

    @Mapping(source = "sousCategories", target = "sousCategories")
    @Mapping(source = "produits", target = "produits")
    CategorieDTO toDto(Categorie categorie);

    @Mapping(source = "sousCategories", target = "sousCategories")
    @Mapping(source = "produits", target = "produits")
    Categorie toEntity(CategorieDTO categorieDTO);
}
