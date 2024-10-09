package com.salam.backend.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.*;
import lombok.Data;

import java.io.Serial;
import java.io.Serializable;
import java.time.LocalDateTime;

@Data
@Entity
@Table(name = "paiements")
public class Paiement {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    protected int id;

    @Column(nullable = false, length = 50, unique = true)
    protected String numero;

    @Column(nullable = false)
    protected double montant;

    @Column(nullable = false, length = 50)
    protected LocalDateTime date;

    @Column(nullable = false)
    protected boolean etat;

    @OneToOne(mappedBy = "paiement")
    private Recu recu;

    @OneToOne
    @JoinColumn(name = "commande_id", referencedColumnName = "id", foreignKey = @ForeignKey(name = "fk_paiement_commande"))
    private Commande commande;

    @ManyToOne
    @JoinColumn(name = "mode_paiement_id", referencedColumnName = "id", foreignKey = @ForeignKey(name = "paiement_modepaiement"))
    private ModePaiement modePaiement;

}
