package com.salam.backend.mapper;

import com.salam.backend.dto.AdministrateurDTO;
import com.salam.backend.dto.PaiementDTO;
import com.salam.backend.model.Administrateur;
import com.salam.backend.model.Paiement;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.factory.Mappers;

@Mapper(componentModel = "spring")
public interface PaiementMapper {
    PaiementMapper INSTANCE = Mappers.getMapper(PaiementMapper.class);

    // Mapping Entité -> DTO
    @Mapping(source = "recu", target = "recu")               // Mapping pour le reçu associé
    PaiementDTO toDto(Paiement paiement);

    // Mapping DTO -> Entité
    @Mapping(source = "recu", target = "recu")
    Paiement toEntity(PaiementDTO paiementDTO);
}
