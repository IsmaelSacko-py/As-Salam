package com.salam.backend.model;

import com.salam.backend.enumeration.TypeAdresse;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Data;

import java.time.LocalDateTime;

@Entity
@Data
public class Adresse {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(length = 50)
    private String nom;

    @NotBlank(message = "rue requise")
    @Size(max = 50, message = "la rue doit contenir au maximum 50 caractères")
    @Column(nullable = false, length = 50)
    private String rue;

    @NotBlank(message = "ville requise")
    @Size(max = 50, message = "la ville doit contenir au maximum 50 caractères")
    @Column(nullable = false, length = 50)
    private String ville;

    @Column(nullable = false)
    private TypeAdresse type;

}
