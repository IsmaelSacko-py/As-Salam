package com.salam.backend.mapper;

import com.salam.backend.dto.AdministrateurDTO;
import com.salam.backend.dto.AdresseDTO;
import com.salam.backend.model.Administrateur;
import com.salam.backend.model.Adresse;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface AdresseMapper extends EntityMapper<AdresseDTO, Adresse> {

}
