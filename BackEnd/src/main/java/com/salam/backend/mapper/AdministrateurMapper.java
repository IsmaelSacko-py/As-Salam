package com.salam.backend.mapper;

import com.salam.backend.dto.AdministrateurDTO;
import com.salam.backend.dto.CategorieDTO;
import com.salam.backend.model.Administrateur;
import com.salam.backend.model.Categorie;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface AdministrateurMapper extends EntityMapper<AdministrateurDTO, Administrateur> {

}
