package com.salam.backend.mapper;

import com.salam.backend.dto.AdministrateurDTO;
import com.salam.backend.dto.PaiementDTO;
import com.salam.backend.model.Administrateur;
import com.salam.backend.model.Paiement;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface PaiementMapper extends EntityMapper<PaiementDTO, Paiement> {

}
