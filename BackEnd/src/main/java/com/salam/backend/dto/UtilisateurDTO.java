package com.salam.backend.dto;

import lombok.Data;

import java.io.Serial;
import java.io.Serializable;

@Data
public class UtilisateurDTO implements Serializable {
    @Serial
    private static final long serialVersionUID = 1L;

    protected int id;
    protected String name;
    protected String surname;
    protected String email;
    protected String telephone;
    protected String password;

    protected ProfilDTO profil;

}
