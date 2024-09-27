package com.salam.backend.model;

import com.salam.backend.enumeration.EtatCommande;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Data;

import java.io.Serial;
import java.io.Serializable;
import java.util.List;

@Data
@Entity
@Table(name = "categories")
public class Categorie  implements Serializable {
    @Serial
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(nullable = false, length = 50, unique = true)
    private String numero;

    @NotBlank(message = "libellé requis")
    @Size(max = 255, message = "libellé trop long. Maximum 100 caractères")
    @Column(nullable = false, length = 100)
    private String libelle;
//
//    @Column(nullable = false)
//    private String description;

    @OneToMany(mappedBy = "categorie")
    private List<Produit> produits;

    @OneToMany(mappedBy = "parentCategorie")
    private List<Categorie> sousCategories;

    @ManyToOne
    @JoinColumn(name = "categorie_id", referencedColumnName = "id", foreignKey = @ForeignKey(name = "fk_categorie_souscategorie"))
    private Categorie parentCategorie;

}
