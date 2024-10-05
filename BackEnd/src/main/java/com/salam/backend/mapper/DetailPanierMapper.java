package com.salam.backend.mapper;

import com.salam.backend.dto.DetailCommandeDTO;
import com.salam.backend.dto.DetailPanierDTO;
import com.salam.backend.model.DetailCommande;
import com.salam.backend.model.DetailPanier;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.factory.Mappers;

@Mapper(componentModel = "spring")
public interface DetailPanierMapper {
    DetailPanierMapper INSTANCE = Mappers.getMapper(DetailPanierMapper.class);

//    // Mapping Entité -> DTO
//    @Mapping(source = "produit", target = "produit")  // Mapping pour le produit
//    @Mapping(source = "panier", target = "panier")  // Mapping pour le panier
    DetailPanierDTO toDto(DetailPanier detailPanier);
//
//    // Mapping DTO -> Entité
//    @Mapping(source = "produit", target = "produit")
//    @Mapping(source = "panier", target = "panier")
    DetailPanier toEntity(DetailPanierDTO detailPanierDTO);
}
