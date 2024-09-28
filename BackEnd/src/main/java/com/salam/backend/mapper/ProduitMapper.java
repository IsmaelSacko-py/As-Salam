package com.salam.backend.mapper;

import com.salam.backend.dto.AdministrateurDTO;
import com.salam.backend.dto.CategorieDTO;
import com.salam.backend.dto.ProduitDTO;
import com.salam.backend.model.Administrateur;
import com.salam.backend.model.Categorie;
import com.salam.backend.model.Produit;
import org.mapstruct.InheritConfiguration;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.MappingTarget;
import org.mapstruct.factory.Mappers;

import java.util.List;

@Mapper(componentModel = "spring", uses = {CategorieMapper.class})
public interface ProduitMapper {

    @Mapping(source = "categorie", target = "categorie")
    ProduitDTO toDto(Produit produit);

    @Mapping(source = "categorie", target = "categorie")
    Produit toEntity(ProduitDTO produitDTO);
}
