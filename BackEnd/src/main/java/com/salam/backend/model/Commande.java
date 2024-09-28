package com.salam.backend.model;

import com.salam.backend.enumeration.EtatCommande;
import jakarta.persistence.*;
import lombok.Data;

import java.io.Serial;
import java.io.Serializable;
import java.time.LocalDateTime;
import java.util.List;

@Data
@Entity
@Table(name = "commandes")
public class Commande {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(nullable = false, length = 50, unique = true)
    private String numero;

    @Column(nullable = false, length = 50)
    private LocalDateTime date;

    @Column(nullable = false)
    private EtatCommande statut;

    @Column(nullable = false)
    private double totalPrix;

    @ManyToOne
    @JoinColumn(name = "membre_id", referencedColumnName = "id", foreignKey = @ForeignKey(name = "fk_commande_membre"))
    private Membre membre;

//    @ManyToMany
//    @JoinTable(
//            name = "detailsCommande",
//            joinColumns = @JoinColumn(name = "produit_id"),
//            inverseJoinColumns = @JoinColumn(name = "commande_id")
//    )
//    private List<Produit> produits;

    @OneToMany(mappedBy = "commande")
    private List<DetailCommande> detailsCommande;

    @OneToOne(mappedBy = "commande")
    private Paiement paiement;
}
