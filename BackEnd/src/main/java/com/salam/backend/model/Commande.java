package com.salam.backend.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
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
    @JoinColumn(name = "client_id", referencedColumnName = "id", foreignKey = @ForeignKey(name = "fk_commande_client"))
    private Client client;

    @OneToMany(mappedBy = "commande", cascade = CascadeType.REMOVE)
    private List<DetailCommande> detailsCommande;

    @OneToOne(mappedBy = "commande")
    private Paiement paiement;
}
