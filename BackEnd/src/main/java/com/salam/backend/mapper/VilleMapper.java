package com.salam.backend.mapper;

import com.salam.backend.dto.ClientDTO;
import com.salam.backend.dto.VilleDTO;
import com.salam.backend.model.Client;
import com.salam.backend.model.Ville;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.factory.Mappers;

@Mapper(componentModel = "spring")
public interface VilleMapper extends EntityMapper<VilleDTO, Ville> {
    VilleMapper INSTANCE = Mappers.getMapper(VilleMapper.class);

    // Mapping Entité -> DTO
    @Mapping(source = "adresses", target = "adresses") // Mapping pour la liste des adresses
    VilleDTO toDto(Ville ville);

    // Mapping DTO -> Entité
    @Mapping(source = "adresses", target = "adresses")
    Ville toEntity(VilleDTO villeDTO);
}
