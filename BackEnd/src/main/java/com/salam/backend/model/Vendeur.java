package com.salam.backend.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@Entity
@DiscriminatorValue("vendeur")

public class Vendeur extends Client{

    @OneToMany(mappedBy = "vendeur")
    @JsonIgnoreProperties(value = {"vendeur"}, allowSetters = true)
    private List<Produit> produits;

    @OneToMany(mappedBy = "vendeur")
    @JsonIgnoreProperties(value = {"vendeur"}, allowSetters = true)
    private List<Commande> commandes;
}
