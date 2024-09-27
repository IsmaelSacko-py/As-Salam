package com.salam.backend.model;

import jakarta.persistence.*;
import lombok.Data;
import lombok.EqualsAndHashCode;

import java.io.Serial;
import java.io.Serializable;
import java.time.LocalDateTime;
import java.util.List;

@Entity
@Data
@EqualsAndHashCode(callSuper = true)
public class Membre extends Utilisateur implements Serializable {
    @Serial
    private static final long serialVersionUID = 1L;

    protected LocalDateTime dateInscription;
    protected boolean status;

    @ManyToMany(mappedBy = "membres")
    protected List<Adresse> adresses;

    @OneToMany(mappedBy = "membre")
    protected List<Commande> commandes;

    @OneToMany(mappedBy = "membre")
    protected List<ConversationChatBot> conversationChatBots;

    @OneToOne
    @JoinColumn(name = "panier_id", referencedColumnName = "id", foreignKey = @ForeignKey(name = "fk_membre_panier"))
    protected Panier panier;

}
