package com.salam.backend.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.salam.backend.dto.UtilisateurDTO;
import jakarta.persistence.*;
import lombok.Data;
import lombok.ToString;

import java.util.List;

@Data
@Entity
@Table(name = "profils")
@JsonIgnoreProperties({"utilisateurs"})
public class Profil {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(unique=true, nullable=false, length=30)
    private String nom;

    @OneToMany(mappedBy = "profil")
    @ToString.Exclude
    private List<Utilisateur> utilisateurs;
}
