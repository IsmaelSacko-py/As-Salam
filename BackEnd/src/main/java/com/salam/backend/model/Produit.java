package com.salam.backend.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.salam.backend.enumeration.EtatProduit;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.PositiveOrZero;
import jakarta.validation.constraints.Size;
import lombok.*;

import java.time.LocalDateTime;
import java.util.List;

@Getter
@Setter
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
    @Column(nullable = false, columnDefinition = "TEXT")
    private String description;

    @NotNull(message = "prix requis")
    @PositiveOrZero(message = "Le prix doit être égal ou supérieur à 0")
    @Column(nullable = false)
    private double prix;

    private double remise;

    @NotNull(message = "quantité requis")
    @PositiveOrZero(message = "La quantité doit être supérieur à 0")
    @Column(nullable = false)
    private int quantite;

    @Column(nullable = false)
    private LocalDateTime dateAjout;

    @Column(nullable = false, columnDefinition = "SMALLINT DEFAULT  0")
    private EtatProduit statut;

    @Column(nullable = false)
    private boolean disponible = true;

    @Column(nullable = false)
    private boolean bloque = true;

    @OneToMany(mappedBy = "produit")
    @JsonIgnoreProperties(value = {"produit", "commande"}, allowSetters = true)
    private List<DetailCommande> detailsCommande;

    @OneToMany(mappedBy = "produit")
//    @JsonIgnoreProperties(value = {"panier"}, allowSetters = true)
    private List<DetailPanier> detailsPanier;

//    @ToString.Exclude
    @OneToMany(mappedBy = "produit", cascade = CascadeType.REMOVE)
    @JsonIgnoreProperties(value = {"produit"}, allowSetters = true)
    private List<Image> images;

    @ManyToOne
    @JoinColumn(name = "categorie_id", referencedColumnName = "id", foreignKey = @ForeignKey(name = "fk_produit_categorie"))
    @JsonIgnoreProperties(value = {"produits", "sousCategories"}, allowSetters = true)
    private Categorie categorie;

    @ManyToOne
    @JoinColumn(name = "vendeur_id", referencedColumnName = "id", foreignKey = @ForeignKey(name = "fk_produit_commande"))
    @JsonIgnoreProperties(value = {"produits"})
    private Vendeur vendeur;
}
