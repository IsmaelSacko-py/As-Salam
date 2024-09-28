package com.salam.backend.dto;

import lombok.Data;

import java.io.Serial;
import java.io.Serializable;
import java.time.LocalDateTime;

@Data
public class PaiementDTO implements Serializable {
    @Serial
    private static final long serialVersionUID = 1L;

    private int id;
    private String numero;
    private double montant;
    private LocalDateTime date;
    private boolean etat;

    private RecuDTO recu;
    private CommandeDTO commande;
}
