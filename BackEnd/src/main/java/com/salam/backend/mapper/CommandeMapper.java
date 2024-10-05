package com.salam.backend.mapper;

import com.salam.backend.dto.CommandeDTO;
import com.salam.backend.dto.UtilisateurDTO;
import com.salam.backend.model.Commande;
import com.salam.backend.model.Utilisateur;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.factory.Mappers;

@Mapper(componentModel = "spring")
public interface CommandeMapper {
    CommandeMapper INSTANCE = Mappers.getMapper(CommandeMapper.class);

    // Mapping Entité -> DTO
    @Mapping(source = "paiement", target = "paiement")  // Mapping pour le paiement
    @Mapping(source = "detailsCommande", target = "detailsCommande")  // Mapping pour les détails de la commande
    CommandeDTO toDto(Commande commande);

    // Mapping DTO -> Entité
    @Mapping(source = "paiement", target = "paiement")
    @Mapping(source = "detailsCommande", target = "detailsCommande")
    Commande toEntity(CommandeDTO commandeDTO);
}
