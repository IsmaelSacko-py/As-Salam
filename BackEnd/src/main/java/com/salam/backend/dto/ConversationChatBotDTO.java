package com.salam.backend.dto;

import com.salam.backend.enumeration.EtatConversationChatBot;
import lombok.Data;

import java.io.Serial;
import java.io.Serializable;

@Data
public class ConversationChatBotDTO implements Serializable {
    @Serial
    private static final long serialVersionUID = 1L;

    private int id;
    private String numero;
    private EtatConversationChatBot statut;
}
