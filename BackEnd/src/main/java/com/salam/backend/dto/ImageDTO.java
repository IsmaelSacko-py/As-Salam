package com.salam.backend.dto;

import com.salam.backend.model.Produit;
import lombok.Data;

import java.io.Serial;
import java.io.Serializable;

@Data
public class ImageDTO implements Serializable {
    @Serial
    private static final long serialVersionUID = 1L;

    private int id;
    private String url;

    private ProduitDTO produit;
}
