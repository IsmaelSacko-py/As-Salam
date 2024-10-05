package com.salam.backend.mapper;

import com.salam.backend.dto.AdministrateurDTO;
import com.salam.backend.dto.AdresseDTO;
import com.salam.backend.model.Administrateur;
import com.salam.backend.model.Adresse;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.factory.Mappers;

@Mapper(componentModel = "spring")
public interface AdresseMapper{
    AdresseMapper INSTANCE = Mappers.getMapper(AdresseMapper.class);

//    // Mapping Entité -> DTO
//    @Mapping(source = "client", target = "client")
//    @Mapping(source = "ville", target = "ville")
    AdresseDTO toDto(Adresse adresse);
//
//    // Mapping DTO -> Entité
//    @Mapping(source = "client", target = "client")
//    @Mapping(source = "ville", target = "ville")
    Adresse toEntity(AdresseDTO adresseDTO);
}
