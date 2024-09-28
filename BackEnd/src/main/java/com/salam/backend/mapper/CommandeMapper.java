package com.salam.backend.mapper;

import com.salam.backend.dto.CommandeDTO;
import com.salam.backend.dto.UtilisateurDTO;
import com.salam.backend.model.Commande;
import com.salam.backend.model.Utilisateur;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface CommandeMapper extends EntityMapper<CommandeDTO, Commande> {

}
