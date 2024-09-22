package com.salam.backend.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Data;

@Entity
@Data
public class Produit {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(nullable = false, unique = true, length = 50)
    private String numero;

    @NotBlank(message = "libellé requis")
    @Size(max = 100, message = "le libellé doit contenir au maximum 100 caractères")
    @Column(nullable = false, length = 100)
    private String libelle;

    @NotBlank(message = "description requise")
    @Column(nullable = false)
    private String description;

    @NotBlank(message = "prix requis")
    @Column(nullable = false)
    private double prix;

    @NotBlank(message = "quantité requise")
    @Column(nullable = false)
    private double quantite;

    @Column(nullable = false)
    private double dateAjout;

    @Column(nullable = false)
    private boolean disponible = true;
}
