package com.salam.backend.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class DetailCommande {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(nullable = false)
    private int quantite;

    @Column(nullable = false)
    private double prixTotal;
}
