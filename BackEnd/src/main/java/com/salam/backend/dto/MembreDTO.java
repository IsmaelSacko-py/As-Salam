package com.salam.backend.dto;

import lombok.Data;
import lombok.EqualsAndHashCode;

import java.time.LocalDateTime;

@EqualsAndHashCode(callSuper = true)
@Data
public class MembreDTO extends UtilisateurDTO{
    protected LocalDateTime dateInscription;
    protected boolean statut;
}
