package com.salam.backend.mapper;

import com.salam.backend.dto.DetailCommandeDTO;
import com.salam.backend.dto.DetailPanierDTO;
import com.salam.backend.model.DetailCommande;
import com.salam.backend.model.DetailPanier;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface DetailPanierMapper extends EntityMapper<DetailPanierDTO, DetailPanier> {

}
