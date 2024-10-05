package com.salam.backend.mapper;

import com.salam.backend.dto.ProfilDTO;
import com.salam.backend.dto.RecuDTO;
import com.salam.backend.model.Profil;
import com.salam.backend.model.Recu;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.factory.Mappers;

@Mapper(componentModel = "spring")
public interface ProfilMapper {
    ProfilMapper INSTANCE = Mappers.getMapper(ProfilMapper.class);

//    // Mapping Entité -> DTO
//    @Mapping(source = "utilisateurs", target = "utilisateurs") // Mapping pour la liste des utilisateurs
    ProfilDTO toDto(Profil profil);
//
//    // Mapping DTO -> Entité
//    @Mapping(source = "utilisateurs", target = "utilisateurs")
    Profil toEntity(ProfilDTO profilDTO);
}
