package com.salam.backend.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.Data;

import java.util.List;

@Data
@Entity
public class CategoriePaiement {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(nullable = false, unique = true, length = 100)
    private String numero;

    @Column(nullable = false, unique = true, length = 100)
    private String libelle;

    @OneToMany(mappedBy = "categoriePaiement")
    @JsonIgnoreProperties(value = {"categoriePaiement"}, allowSetters = true)
    private List<ModePaiement> modePaiements;

}
