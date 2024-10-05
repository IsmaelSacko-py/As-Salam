package com.salam.backend.mapper;

import com.salam.backend.dto.CommandeDTO;
import com.salam.backend.dto.DetailCommandeDTO;
import com.salam.backend.model.Commande;
import com.salam.backend.model.DetailCommande;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.factory.Mappers;

@Mapper(componentModel = "spring")
public interface DetailCommandeMapper {
    DetailCommandeMapper INSTANCE = Mappers.getMapper(DetailCommandeMapper.class);

//    // Mapping Entité -> DTO
//    @Mapping(source = "produit", target = "produit")  // Mapping pour le produit
//    @Mapping(source = "commande", target = "commande")  // Mapping pour la commande
    DetailCommandeDTO toDto(DetailCommande detailCommande);
//
//    // Mapping DTO -> Entité
//    @Mapping(source = "produit", target = "produit")
//    @Mapping(source = "commande", target = "commande")
    DetailCommande toEntity(DetailCommandeDTO detailCommandeDTO);
}
