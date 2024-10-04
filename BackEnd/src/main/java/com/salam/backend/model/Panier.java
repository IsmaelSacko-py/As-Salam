package com.salam.backend.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.Data;
import lombok.ToString;

import java.io.Serial;
import java.io.Serializable;
import java.util.List;

@Data
@Entity
@Table(name = "paniers")
@JsonIgnoreProperties({"client"})
public class Panier {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(nullable = false, unique = true)
    private String numero;

    @OneToMany(mappedBy = "panier")
    @JsonIgnoreProperties(value = {"panier"}, allowSetters = true)
    @ToString.Exclude
    private List<DetailPanier> detailsPanier;

    @OneToOne(mappedBy = "panier")
    @ToString.Exclude
    private Client client;
}
