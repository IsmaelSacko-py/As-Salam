package com.salam.backend.dto;

import lombok.Data;

import java.io.Serial;
import java.io.Serializable;
import java.util.List;

@Data
public class CategorieDTO implements Serializable {
    @Serial
    private static final long serialVersionUID = 1L;

    private int id;
    private String numero;
    private String libelle;
//    private String description;

    private CategorieDTO categorie;
    private List<CategorieDTO> sousCategories;
    private List<ProduitDTO> produits;
}
