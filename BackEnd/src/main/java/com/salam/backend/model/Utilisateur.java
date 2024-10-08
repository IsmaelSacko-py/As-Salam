package com.salam.backend.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Data;

import java.io.Serial;
import java.io.Serializable;

@Data
@Entity
@Table(name = "utilisateurs")
@Inheritance(strategy = InheritanceType.SINGLE_TABLE)
public class Utilisateur {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    protected int id;

    @NotBlank(message = "nom requis")
    @Size(min = 1, max = 100, message = "doit contenir au maximum 100 caractères")
    @Column(nullable = false, length = 100)
    protected String name;

    @NotBlank(message = "prenom requis")
    @Size(min = 1, max = 100, message = "doit contenir au maximum 100 caractères")
    @Column(nullable = false, length = 100)
    protected String surname;

    @NotBlank(message = "email requis")
    @Size(min = 1, max = 100, message = "doit contenir au maximum 100 caractères")
//    @Email(regexp = "", message = "email invalide")
    @Column(nullable = false, length = 100, unique = true)
    protected String email;

    @NotBlank(message = "numéro de téléphone requis")
    @Size(min = 1, max = 20, message = "doit contenir au maximum 20 caractères")
    @Column(nullable = false, length = 20, unique = true)
    protected String telephone;

    @NotBlank(message = "mot de passe requis")
    @Column(nullable = false, length = 150)
    protected String password;

    @ManyToOne
    @JoinColumn(name = "profil_id", referencedColumnName = "id", foreignKey = @ForeignKey(name = "fk_user_profil"))
    protected Profil profil;
}
