package com.salam.backend.mapper;

import com.salam.backend.dto.MembreDTO;
import com.salam.backend.dto.ProfilDTO;
import com.salam.backend.dto.RecuDTO;
import com.salam.backend.dto.UtilisateurDTO;
import com.salam.backend.model.Membre;
import com.salam.backend.model.Utilisateur;
import org.mapstruct.*;

@Mapper(componentModel = "spring")
public interface UtilisateurMapper extends EntityMapper<UtilisateurDTO, Utilisateur> {

}
