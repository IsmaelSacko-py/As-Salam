package com.salam.backend.mapper;

import com.salam.backend.dto.ClientDTO;
import com.salam.backend.dto.ProfilDTO;
import com.salam.backend.dto.RecuDTO;
import com.salam.backend.dto.UtilisateurDTO;
import com.salam.backend.model.Client;
import com.salam.backend.model.Utilisateur;
import org.mapstruct.*;
import org.mapstruct.factory.Mappers;

@Mapper(componentModel = "spring")
public interface UtilisateurMapper {
    UtilisateurMapper INSTANCE = Mappers.getMapper(UtilisateurMapper.class);

    // Mapping Entité -> DTO
    @SubclassMapping(source = Client.class, target = ClientDTO.class)
    @Mapping(source = "profil", target = "profil") // Mapping pour le profil associé
    UtilisateurDTO toDto(Utilisateur utilisateur);

    // Mapping DTO -> Entité
    @Mapping(source = "profil", target = "profil")
    Utilisateur toEntity(UtilisateurDTO utilisateurDTO);
}
