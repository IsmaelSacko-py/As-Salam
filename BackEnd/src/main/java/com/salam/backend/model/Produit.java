package com.salam.backend.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Data;

import java.time.LocalDateTime;
import java.util.List;

@Data
@Entity
@Table(name = "produits")
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

    private double remise;

    @NotBlank(message = "quantité requise")
    @Column(nullable = false)
    private int quantite;

    @Column(nullable = false)
    private LocalDateTime dateAjout;

    @Column(nullable = false)
    private boolean disponible = true;

    @Column(nullable = false)
    private boolean bloque = true;

//    @ManyToMany(mappedBy = "produits")
//    private List<Commande> commandes;

    @OneToMany(mappedBy = "produit")
    private List<DetailCommande> detailsCommande;

    @OneToMany(mappedBy = "produit")
    private List<DetailPanier> detailsPanier;

    @OneToMany(mappedBy = "produit")
    private List<Image> images;

    @ManyToOne
    @JoinColumn(name = "categorie_id", referencedColumnName = "id", foreignKey = @ForeignKey(name = "fk_produit_categorie"))
    private Categorie categorie;
}
