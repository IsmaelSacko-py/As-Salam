package com.salam.backend.util;

import com.salam.backend.model.Profil;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Data;

import java.time.LocalDateTime;

@Data
public class UserRegisterDetails {

    private int id;

    private String name;

    private String surname;

    private String email;

    private String telephone;

    private String password;

    private LocalDateTime dateInscription;

    private boolean status;

    private Profil profil;


}
