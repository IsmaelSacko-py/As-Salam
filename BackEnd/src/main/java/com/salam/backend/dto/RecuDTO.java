package com.salam.backend.dto;

import lombok.Data;

import java.io.Serial;
import java.io.Serializable;
import java.time.LocalDateTime;

@Data
public class RecuDTO implements Serializable {
    @Serial
    private static final long serialVersionUID = 1L;

    private int id;
    private String numero;
    private LocalDateTime dateEmission;
    private double montant;
}
