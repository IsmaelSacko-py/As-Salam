package com.salam.backend.model;

import com.salam.backend.dto.UtilisateurDTO;
import jakarta.persistence.*;
import lombok.Data;

import java.util.List;

@Data
@Entity
@Table(name = "profils")
public class Profil {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(unique=true, nullable=false, length=30)
    private String nom;

    @OneToMany(mappedBy = "profil")
    private List<Utilisateur> utilsateurs;
}
