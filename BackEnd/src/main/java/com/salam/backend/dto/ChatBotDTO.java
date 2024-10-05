package com.salam.backend.dto;

import lombok.Data;

import java.io.Serial;
import java.io.Serializable;
import java.util.List;

@Data
public class ChatBotDTO implements Serializable {
    @Serial
    private static final long serialVersionUID = 1L;

    private int id;
    private String nom;
    private String langue;

    private List<ConversationChatBotDTO> conversationsChatBot;
}
