package com.salam.backend.enumeration;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Getter

public enum TypePaiement {
    ESPECE("Espèces"),
    CARTE_BANCAIRE("Carte bancaire"),
    PAIEMENT_MOBILE("Paiement mobile");

    private final String description;


    @RequiredArgsConstructor
    @Getter
    public enum typePaiementMobile {
        ORANGE_MONEY("Orange money"),
        WAVE("Wave");

        private final String description;
    }

    @RequiredArgsConstructor
    @Getter
    public enum typeCarteBancaire {
        VISA("Visa"),
        MASTERCARD("MasterCard"),
        AMERICAN_EXPRESS("American Express"),
        DISCOVER("Discover");

        private final String description;
    }
}
