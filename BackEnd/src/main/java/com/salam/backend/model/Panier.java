package com.salam.backend.model;

import jakarta.persistence.*;
import lombok.Data;

import java.io.Serial;
import java.io.Serializable;
import java.util.List;

@Data
@Entity
@Table(name = "paniers")
public class Panier implements Serializable {
    @Serial
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(nullable = false)
    private double totalPrix;

    @OneToMany(mappedBy = "panier")
    private List<DetailPanier> detailsPanier;

    @OneToOne(mappedBy = "panier")
    private Membre membre;
}
