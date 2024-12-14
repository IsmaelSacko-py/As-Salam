package com.salam.backend.enumeration;

import com.fasterxml.jackson.annotation.JsonValue;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Getter
public enum EtatCommande {
    EN_ATTENTE("En attente"),
    EN_COURS("En cours"),
    EXPEDIEE("Expédiée"),
    LIVREE("Livrée"),
    ANNULEE("Annulée");

    private final String statutLisible;


    // Cette méthode est utilisée pour la sérialisation JSON
    @JsonValue
    public String getStatutLisible() {
        return statutLisible;
    }

    public static EtatCommande fromString(String statut) {
        for (EtatCommande s : EtatCommande.values()) {
            if (s.statutLisible.equalsIgnoreCase(statut)) {
                return s;
            }
        }
        return null;
    }
}
