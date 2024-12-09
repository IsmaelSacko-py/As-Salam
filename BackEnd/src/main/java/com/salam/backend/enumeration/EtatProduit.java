package com.salam.backend.enumeration;

import com.fasterxml.jackson.annotation.JsonValue;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Getter
public enum EtatProduit {
    EN_ATTENTE("En attente"),
    ACTIF("Actif"),
    BLOQUE("Bloqué");

    private final String statutLisible;


    // Cette méthode est utilisée pour la sérialisation JSON
    @JsonValue
    public String getStatutLisible() {
        return statutLisible;
    }

    public static EtatProduit fromString(String statut) {
        for (EtatProduit s : EtatProduit.values()) {
            if (s.statutLisible.equalsIgnoreCase(statut)) {
                return s;
            }
        }
        return null;
    }
}
