package com.salam.backend.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.Data;
import lombok.EqualsAndHashCode;

import java.time.LocalDateTime;
import java.util.List;

@EqualsAndHashCode(callSuper = true)
@Entity
@Data
@DiscriminatorValue("client")
//@JsonIgnoreProperties({"profil", "adresses", "conversationsChatBot", "panier"})
public class Client extends Utilisateur{
    protected LocalDateTime dateInscription;
    protected boolean status;

    @OneToMany(mappedBy = "client")
    @JsonIgnoreProperties(value = {"client"}, allowSetters = true)
    protected List<Adresse> adresses;

    @OneToMany(mappedBy = "client")
    @JsonIgnoreProperties(value = {"client"}, allowSetters = true)
    protected List<Commande> commandes;

    @OneToMany(mappedBy = "client")
    @JsonIgnoreProperties(value = {"client"}, allowSetters = true)
    protected List<ConversationChatBot> conversationsChatBot;

    @OneToOne
    @JoinColumn(name = "panier_id", referencedColumnName = "id", foreignKey = @ForeignKey(name = "fk_client_panier"))
    protected Panier panier;
}
