package com.salam.backend.model;

import com.salam.backend.enumeration.EtatCommande;
import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class Categorie {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    protected int id;

    @Column(nullable = false, length = 100, unique = true)
    protected String numero;

    @Column(nullable = false, length = 100)
    protected String libelle;

    @Column(nullable = false)
    protected EtatCommande description;



}
