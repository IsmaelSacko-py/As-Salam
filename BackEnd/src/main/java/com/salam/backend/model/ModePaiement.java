package com.salam.backend.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.salam.backend.enumeration.TypePaiement;
import jakarta.persistence.*;
import lombok.Data;

import java.io.Serial;
import java.io.Serializable;
import java.util.List;

@Data
@Entity
public class ModePaiement {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(nullable = false, unique = true, length = 100)
    private String numero;

    @Column(nullable = false, unique = true, length = 100)
    private String libelle;

    @Column(length = 50)
    private String image;

    @OneToMany(mappedBy = "modePaiement")
    @JsonIgnoreProperties(value = {"modePaiement"}, allowSetters = true)
    private List<Paiement> paiements;

    @ManyToOne
    @JoinColumn(name = "categorie_paiement_id", referencedColumnName = "id", foreignKey = @ForeignKey(name = "modepaiement_categoriepaiement"))
    private CategoriePaiement categoriePaiement;

}
