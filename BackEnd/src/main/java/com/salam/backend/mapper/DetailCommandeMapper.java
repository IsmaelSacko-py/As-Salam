package com.salam.backend.mapper;

import com.salam.backend.dto.CommandeDTO;
import com.salam.backend.dto.DetailCommandeDTO;
import com.salam.backend.model.Commande;
import com.salam.backend.model.DetailCommande;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface DetailCommandeMapper extends EntityMapper<DetailCommandeDTO, DetailCommande> {

}
