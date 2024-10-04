package com.salam.backend.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Data;
import lombok.ToString;

import java.util.List;

@Data
@Entity
@Table(name = "villes")
@JsonIgnoreProperties({"region"})
public class Ville {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(nullable = false, unique = true, length = 100)
    private String numero;

    @NotBlank(message = "nom requis")
    @Size(max = 50, message = "le nom doit contenir au maximum 50 caractères")
    private String nom;

    @ManyToOne
    @JoinColumn(name = "region_id", referencedColumnName = "id", foreignKey = @ForeignKey(name = "fk_ville_region"))
    @ToString.Exclude
    private Region region;

    @OneToMany(mappedBy = "ville")
    @JsonIgnoreProperties({"ville"})
    private List<Adresse> adresses;
}
