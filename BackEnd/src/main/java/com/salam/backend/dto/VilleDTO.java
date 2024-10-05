package com.salam.backend.dto;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.salam.backend.model.Adresse;
import com.salam.backend.model.Region;
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
public class VilleDTO implements Serializable {
    @Serial
    private static final long serialVersionUID = 1L;

    private int id;

    private String numero;

    private String nom;

    private List<AdresseDTO> adresses;
}
