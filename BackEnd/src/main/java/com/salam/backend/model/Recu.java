package com.salam.backend.model;

import jakarta.persistence.*;
import lombok.Data;

import java.io.Serial;
import java.io.Serializable;
import java.time.LocalDateTime;

@Data
@Entity
@Table(name = "reçus")
public class Recu {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(nullable = false, length = 100, unique = true)
    private String numero;

    @Column(nullable = false, length = 50)
    private LocalDateTime date;

    @Column(nullable = false)
    private double montant;

    @OneToOne
    @JoinColumn(name = "paiement_id", referencedColumnName = "id", foreignKey = @ForeignKey(name = "fk_recu_paiement"))
    private Paiement paiement;
}
