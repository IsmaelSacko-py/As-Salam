package com.salam.backend.mapper;

import com.salam.backend.dto.CategorieDTO;
import com.salam.backend.dto.DetailPanierDTO;
import com.salam.backend.model.Categorie;
import com.salam.backend.model.DetailPanier;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface CategorieMapper extends EntityMapper<CategorieDTO, Categorie> {

}
