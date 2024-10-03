package com.salam.backend.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.PositiveOrZero;
import jakarta.validation.constraints.Size;
import lombok.*;
import org.springframework.stereotype.Component;

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

    @Column(nullable = false)
    private boolean disponible = true;

    @Column(nullable = false)
    private boolean bloque = true;

//    @ManyToMany(mappedBy = "produits")
//    private List<Commande> commandes;

    @OneToMany(mappedBy = "produit")
    @JsonIgnoreProperties(value = {"produit", "commande"}, allowSetters = true)
    private List<DetailCommande> detailsCommande;

    @OneToMany(mappedBy = "produit")
    @JsonIgnoreProperties(value = {"produit", "panier"}, allowGetters = true)
    private List<DetailPanier> detailsPanier;

//    @JsonIgnoreProperties(value = {"images"}, allowSetters = true)
    @ToString.Exclude
    @OneToMany(mappedBy = "produit", cascade = CascadeType.REMOVE)
    @JsonIgnoreProperties(value = {"produit"}, allowGetters = true)
    private List<Image> images;

    @ManyToOne
    @JoinColumn(name = "categorie_id", referencedColumnName = "id", foreignKey = @ForeignKey(name = "fk_produit_categorie"))
    @JsonIgnoreProperties(value = {"produit"}, allowGetters = true)
    private Categorie categorie;
}
