package com.salam.backend.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.Data;

import java.io.Serial;
import java.io.Serializable;
import java.util.List;

@Data
@Entity
@Table(name = "details_commande")
public class DetailCommande {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(nullable = false)
    private int quantite;

    @Column(nullable = false)
    private double montant;

    @ManyToOne
    @JoinColumn(name = "produit_id", referencedColumnName = "id", foreignKey = @ForeignKey(name = "fk_produit_detailscommande"))
    @JsonIgnoreProperties(value = {"detailsCommande", "detailsPanier", "vendeur"}, allowSetters = true)
    private Produit produit;

    @ManyToOne
    @JoinColumn(name = "commande_id", referencedColumnName = "id", foreignKey = @ForeignKey(name = "fk_commande_detailscommande"))
    private Commande commande;


}
