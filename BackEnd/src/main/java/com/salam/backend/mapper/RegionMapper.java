package com.salam.backend.mapper;

import com.salam.backend.dto.ClientDTO;
import com.salam.backend.dto.RegionDTO;
import com.salam.backend.model.Client;
import com.salam.backend.model.Region;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.factory.Mappers;

@Mapper(componentModel = "spring")
public interface RegionMapper {
    RegionMapper INSTANCE = Mappers.getMapper(RegionMapper.class);

    // Mapping Entité -> DTO
    @Mapping(source = "villes", target = "villes") // Mapping pour la liste des villes
    RegionDTO toDto(Region region);

    // Mapping DTO -> Entité
    @Mapping(source = "villes", target = "villes")
    Region toEntity(RegionDTO regionDTO);
}
