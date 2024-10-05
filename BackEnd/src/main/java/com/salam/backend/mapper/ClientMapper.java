package com.salam.backend.mapper;

import com.salam.backend.dto.ClientDTO;
import com.salam.backend.dto.VendeurDTO;
import com.salam.backend.model.Client;
import com.salam.backend.model.Vendeur;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.SubclassMapping;
import org.mapstruct.factory.Mappers;

@Mapper(componentModel = "spring")
public interface ClientMapper {

    ClientMapper INSTANCE = Mappers.getMapper(ClientMapper.class);

    // Mapping Entité -> DTO
//    @SubclassMapping(source = Vendeur.class, target = VendeurDTO.class)
    @Mapping(target = "adresses", source = "adresses")
    @Mapping(target = "commandes", source = "commandes")
    @Mapping(target = "conversationsChatBot", source = "conversationsChatBot")
    @Mapping(target = "panier", source = "panier")
    ClientDTO toDto(Client client);

    // Mapping DTO -> Entité
//    @SubclassMapping(source = Vendeur.class, target = VendeurDTO.class)
    @Mapping(target = "adresses", source = "adresses")
    @Mapping(target = "commandes", source = "commandes")
    @Mapping(target = "conversationsChatBot", source = "conversationsChatBot")
    @Mapping(target = "panier", source = "panier")
    Client toEntity(ClientDTO clientDTO);
}
