package com.salam.backend.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.Data;
import lombok.ToString;

import java.io.Serial;
import java.io.Serializable;

@Data
@Entity
@Table(name = "details_panier")
@JsonIgnoreProperties(value = {"panier"})
public class DetailPanier {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(nullable = false)
    private int quantite;

    @Column(nullable = false)
    private double montant;

    @ManyToOne
    @JoinColumn(name = "panier_id", referencedColumnName = "id", foreignKey = @ForeignKey(name = "fk_detailspanier_panier"))
//    @ToString.Exclude
    private Panier panier;

    @ManyToOne
    @JoinColumn(name = "produit_id", referencedColumnName = "id", foreignKey = @ForeignKey(name = "fk_detailspanier_produit"))
//    @JsonIgnoreProperties(value = {"produit"}, allowSetters = true)
    private Produit produit;


}
