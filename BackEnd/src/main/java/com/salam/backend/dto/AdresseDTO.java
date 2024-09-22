package com.salam.backend.dto;

import com.salam.backend.enumeration.TypeAdresse;
import lombok.Data;

import java.io.Serial;
import java.io.Serializable;

@Data
public class AdresseDTO implements Serializable {
    @Serial
    private static final long serialVersionUID = 1L;

    private int id;
    private String nom;
    private String rue;
    private String ville;
    private TypeAdresse typeAdresse;
}