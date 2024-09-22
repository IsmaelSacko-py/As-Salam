package com.salam.backend.model;

import jakarta.persistence.*;
import lombok.Data;
import lombok.EqualsAndHashCode;

import java.time.LocalDateTime;

@Entity
@Data
@EqualsAndHashCode(callSuper = true)
public class Membre extends Utilisateur{

    protected LocalDateTime dateInscription;
    protected boolean status;
}
