package com.salam.backend.mapper;

import com.salam.backend.dto.PanierDTO;
import com.salam.backend.dto.VendeurDTO;
import com.salam.backend.model.Panier;
import com.salam.backend.model.Vendeur;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.factory.Mappers;

@Mapper(componentModel = "spring")
public interface PanierMapper {
    PanierMapper INSTANCE = Mappers.getMapper(PanierMapper.class);

    // Mapping Entité -> DTO
    @Mapping(source = "detailsPanier", target = "detailsPanier") // Mapping pour les détails du panier
    PanierDTO toDto(Panier panier);

    // Mapping DTO -> Entité
    @Mapping(source = "detailsPanier", target = "detailsPanier")
    Panier toEntity(PanierDTO panierDTO);
}
