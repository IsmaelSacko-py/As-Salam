package com.salam.backend.dto;

import com.salam.backend.enumeration.TypeAdresse;
import com.salam.backend.model.Client;
import com.salam.backend.model.Ville;
import lombok.Data;

import java.io.Serial;
import java.io.Serializable;
import java.util.List;

@Data
public class AdresseDTO implements Serializable {
    @Serial
    private static final long serialVersionUID = 1L;

    private int id;
    private String numero;
    private String nom;
    private TypeAdresse type;

//    private ClientDTO client;
//    private VilleDTO ville;
}
