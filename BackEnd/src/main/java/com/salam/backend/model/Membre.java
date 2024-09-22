package com.salam.backend.model;

import jakarta.persistence.*;
import lombok.Data;
import lombok.EqualsAndHashCode;

import java.io.Serial;
import java.io.Serializable;
import java.time.LocalDateTime;

@Entity
@Data
@EqualsAndHashCode(callSuper = true)
public class Membre extends Utilisateur implements Serializable {
    @Serial
    private static final long serialVersionUID = 1L;

    protected LocalDateTime dateInscription;
    protected boolean status;
}
