package com.salam.backend.mapper;

import com.salam.backend.dto.*;
import com.salam.backend.model.Administrateur;
import com.salam.backend.model.Client;
import com.salam.backend.model.Utilisateur;
import com.salam.backend.model.Vendeur;
import org.mapstruct.*;
import org.mapstruct.factory.Mappers;

@Mapper(componentModel = "spring")
public interface UtilisateurMapper {
    UtilisateurMapper INSTANCE = Mappers.getMapper(UtilisateurMapper.class);

    // Mapping Entité -> DTO
    @SubclassMapping(source = Administrateur.class, target = AdministrateurDTO.class)
    @SubclassMapping(source = Client.class, target = ClientDTO.class)
    @Mapping(source = "profil", target = "profil") // Mapping pour le profil associé
    UtilisateurDTO toDto(Utilisateur utilisateur);

    // Mapping DTO -> Entité
    @SubclassMapping(source = AdministrateurDTO.class, target = Administrateur.class)
    @SubclassMapping(source = ClientDTO.class, target = Client.class)
    @Mapping(source = "profil", target = "profil")
    Utilisateur toEntity(UtilisateurDTO utilisateurDTO);
}
