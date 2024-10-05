package com.salam.backend.mapper;

import com.salam.backend.dto.RecuDTO;
import com.salam.backend.model.ConversationChatBot;
import com.salam.backend.model.Recu;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.factory.Mappers;

@Mapper(componentModel = "spring")
public interface RecuMapper {
    RecuMapper INSTANCE = Mappers.getMapper(RecuMapper.class);

//    // Mapping Entité -> DTO
//    @Mapping(source = "paiement", target = "paiement") // Mapping pour le paiement associé
    RecuDTO toDto(Recu recu);
//
//    // Mapping DTO -> Entité
//    @Mapping(source = "paiement", target = "paiement")
    Recu toEntity(RecuDTO recuDTO);
}
