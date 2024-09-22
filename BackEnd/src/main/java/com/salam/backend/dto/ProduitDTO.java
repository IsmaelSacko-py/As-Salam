package com.salam.backend.dto;

import lombok.Data;

import java.io.Serial;
import java.io.Serializable;
import java.time.LocalDateTime;

@Data
public class ProduitDTO implements Serializable {
    @Serial
    private static final long serialVersionUID = 1L;

    private int id;
    private String numero;
    private String libelle;
    private String description;
    private double prix;
    private double remise;
    private int quantiteEnStock;
    private LocalDateTime dateAjout;
    private boolean disponible;

}
