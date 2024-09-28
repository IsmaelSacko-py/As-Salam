package com.salam.backend.mapper;

import com.salam.backend.dto.ProfilDTO;
import com.salam.backend.dto.RecuDTO;
import com.salam.backend.model.Profil;
import com.salam.backend.model.Recu;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface ProfilMapper extends EntityMapper<ProfilDTO, Profil> {

}
