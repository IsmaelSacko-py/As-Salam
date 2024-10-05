package com.salam.backend.dto;

import com.salam.backend.enumeration.EtatCommande;
import lombok.Data;

import java.io.Serial;
import java.io.Serializable;
import java.time.LocalDateTime;
import java.util.List;

@Data
public class CommandeDTO implements Serializable {
    @Serial
    private static final long serialVersionUID = 1L;

    private int id;
    private String numero;
    private LocalDateTime date;
    private EtatCommande statut;
    private double totalPrix;

    private PaiementDTO paiement;
    private List<DetailCommandeDTO> detailsCommande;
}
