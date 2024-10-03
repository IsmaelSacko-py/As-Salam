package com.salam.backend.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.*;

import java.io.File;
import java.io.Serial;
import java.io.Serializable;

@Data
@Entity
@Table(name = "images")
@JsonIgnoreProperties({"produit"})
public class Image {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(nullable = false, unique = true, length = 100)
    private String url;

//    @JsonIgnoreProperties(value = {"images", "categorie"}, allowSetters = true)
    @ManyToOne
    @JoinColumn(name = "produit_id", referencedColumnName = "id", foreignKey = @ForeignKey(name = "fk_image_prduit"))
    private Produit produit;
}
