package com.salam.backend.model;

import com.salam.backend.enumeration.EtatCommande;
import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDateTime;

@Entity
@Data
public class Facture {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    protected int id;

    @Column(nullable = false, length = 100, unique = true)
    protected String numero;

    @Column(nullable = false, length = 50)
    protected LocalDateTime date;

    @Column(nullable = false)
    protected double montant;
}
