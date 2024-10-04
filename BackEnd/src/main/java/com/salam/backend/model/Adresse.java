package com.salam.backend.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.salam.backend.dto.MembreDTO;
import com.salam.backend.enumeration.TypeAdresse;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Data;
import lombok.ToString;

import java.io.Serial;
import java.io.Serializable;
import java.time.LocalDateTime;
import java.util.List;

@Data
@Entity
@Table(name = "adresses")
@JsonIgnoreProperties({"client", "ville"})
public class Adresse {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(nullable = false, unique = true, length = 100)
    private String numero;


    @NotBlank(message = "adresse requise")
    @Size(max = 50, message = "l'adresse doit contenir au maximum 100 caractères")
    @Column(length = 100)
    private String nom;

    @Column(nullable = false)
    private TypeAdresse type;

    @ManyToOne
    @JoinColumn(name = "client_id", referencedColumnName = "id", foreignKey = @ForeignKey(name = "fk_adresse_client"))
    @ToString.Exclude
    private Client client;

    @ManyToOne
    @JoinColumn(name = "ville_id", referencedColumnName = "id", foreignKey = @ForeignKey(name = "fk_adresse_ville"))
    @ToString.Exclude
    private Ville ville;

}
