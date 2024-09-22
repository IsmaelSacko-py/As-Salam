package com.salam.backend.model;

import com.salam.backend.enumeration.EtatCommande;
import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDateTime;

@Entity
@Data
public class Commande {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(nullable = false, length = 100, unique = true)
    private String numero;

    @Column(nullable = false, length = 50)
    private LocalDateTime date;

    @Column(nullable = false)
    private EtatCommande statut;

    @Column(nullable = false)
    private double totalPrix;
}
