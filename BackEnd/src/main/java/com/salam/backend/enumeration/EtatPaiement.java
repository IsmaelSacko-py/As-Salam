package com.salam.backend.enumeration;

import com.fasterxml.jackson.annotation.JsonValue;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Getter
public enum EtatPaiement {
    EN_ATTENTE("En attente"),
    PAYE("Payé"),
    REMBOURSE("Remboursé"),
    ANNULE("Annulé");

    private final String statutLisible;


    // Cette méthode est utilisée pour la sérialisation JSON
    @JsonValue
    public String getStatutLisible() {
        return statutLisible;
    }

    public static EtatPaiement fromString(String statut) {
        for (EtatPaiement s : EtatPaiement.values()) {
            if (s.statutLisible.equalsIgnoreCase(statut)) {
                return s;
            }
        }
        return null;
    }
}
