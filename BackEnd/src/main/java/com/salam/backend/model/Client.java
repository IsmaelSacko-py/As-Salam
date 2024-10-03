package com.salam.backend.model;

import jakarta.persistence.*;
import lombok.Data;
import lombok.EqualsAndHashCode;

import java.time.LocalDateTime;
import java.util.List;

@EqualsAndHashCode(callSuper = true)
@Entity
@Data
@DiscriminatorValue("client")
public class Client extends Utilisateur{
    protected LocalDateTime dateInscription;
    protected boolean status;

    @OneToMany(mappedBy = "client")
    protected List<Adresse> adresses;

    @OneToMany(mappedBy = "client")
    protected List<Commande> commandes;

    @OneToMany(mappedBy = "client")
    protected List<ConversationChatBot> conversationChatBots;

    @OneToOne
    @JoinColumn(name = "panier_id", referencedColumnName = "id", foreignKey = @ForeignKey(name = "fk_client_panier"))
    protected Panier panier;
}
