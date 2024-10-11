package com.salam.backend.enumeration;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Getter
public enum EtatCommande {
    EN_COURS("en cours"),
    LIVREE("livrée"),
    ANNULEE("annulée");

    private final String description;
}
