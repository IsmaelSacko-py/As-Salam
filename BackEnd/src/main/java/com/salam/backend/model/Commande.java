package com.salam.backend.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.salam.backend.enumeration.EtatCommande;
import jakarta.persistence.*;
import lombok.Data;

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
    @JoinColumn(name = "vendeur_id", referencedColumnName = "id", foreignKey = @ForeignKey(name = "fk_commande_vendeur"))
    @JsonIgnoreProperties(value = {"commandes", "adresses", "conversationsChatBot", "produits", "panier"}, allowSetters = true)
    private Vendeur vendeur;

    @ManyToOne
    @JoinColumn(name = "client_id", referencedColumnName = "id", foreignKey = @ForeignKey(name = "fk_commande_client"))
    @JsonIgnoreProperties(value = {"commandes", "adresses", "conversationsChatBot", "produits", "panier"}, allowSetters = true)
    private Client client;

    @OneToMany(mappedBy = "commande", cascade = CascadeType.REMOVE)
    @JsonIgnoreProperties(value = {"commande"}, allowSetters = true)
    private List<DetailCommande> detailsCommande;

    @OneToOne(mappedBy = "commande")
    @JsonIgnoreProperties(value = {"commande"}, allowSetters = true)
    private Paiement paiement;

    @ManyToOne
    @JoinColumn(name = "adresse_id", referencedColumnName = "id", foreignKey = @ForeignKey(name = "fk_commande_adresse"))
    @JsonIgnoreProperties(value = {"commandes"}, allowSetters = true)
    private Adresse adresse;


}
