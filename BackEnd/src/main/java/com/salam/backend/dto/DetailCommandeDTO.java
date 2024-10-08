package com.salam.backend.dto;

import lombok.Data;

import java.io.Serial;
import java.io.Serializable;

@Data
public class DetailCommandeDTO implements Serializable {
    @Serial
    private static final long serialVersionUID = 1L;

    private int id;
    private int quantite;
    private double montant;

}
