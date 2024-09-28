package com.salam.backend.model;

import com.salam.backend.dto.MembreDTO;
import com.salam.backend.enumeration.TypeAdresse;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Data;

import java.io.Serial;
import java.io.Serializable;
import java.time.LocalDateTime;
import java.util.List;

@Data
@Entity
@Table(name = "adresses")
public class Adresse {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(length = 100)
    private String nom;

    @NotBlank(message = "rue requise")
    @Size(max = 50, message = "la rue doit contenir au maximum 50 caractères")
    @Column(nullable = false, length = 50)
    private String rue;

    @Column(nullable = false)
    private TypeAdresse type;

    @ManyToMany
    @JoinTable(
            name = "membre_adresse",
            joinColumns = @JoinColumn(name = "membre_id"),
            inverseJoinColumns = @JoinColumn(name = "adresse_id")
    )
    private List<Membre> membres;

}
