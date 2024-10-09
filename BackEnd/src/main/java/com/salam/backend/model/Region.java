package com.salam.backend.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Data;

import java.util.List;

@Data
@Entity
@Table(name = "regions")
//@JsonIgnoreProperties(value = {"villes"}, allowSetters = true)
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
    @JsonIgnoreProperties(value = {"region"}, allowSetters = true)
    private List<Ville> villes;
}
