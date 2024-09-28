package com.salam.backend.dto;

import lombok.Data;
import lombok.EqualsAndHashCode;

import java.time.LocalDateTime;
import java.util.List;

@EqualsAndHashCode(callSuper = true)
@Data
public class MembreDTO extends UtilisateurDTO{
    protected LocalDateTime dateInscription;
    protected boolean status;

    protected List<AdresseDTO> adresses;
    protected List<ConversationChatBotDTO> conversationsChatBot;
    protected List<CommandeDTO> commandes;
    protected PanierDTO panier;
}
