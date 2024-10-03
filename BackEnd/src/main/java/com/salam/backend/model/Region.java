package com.salam.backend.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Data;

import java.util.List;

@Data
@Entity
@Table(name = "regions")
public class Region {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(nullable = false, unique = true, length = 100)
    private String numero;

    @NotBlank(message = "nom requise")
    @Size(max = 50, message = "le nom doit contenir au maximum 50 caractères")
    private String nom;

    @OneToMany(mappedBy = "region")
    private List<Ville> villes;
}
