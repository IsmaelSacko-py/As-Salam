package com.salam.backend.dto;

import lombok.Data;

import java.io.Serial;
import java.io.Serializable;
import java.time.LocalDateTime;

@Data
public class MessageChatBotDTO implements Serializable {
    @Serial
    private static final long serialVersionUID = 1L;

    private int id;
    private String contenu;
    private LocalDateTime date;
    private boolean isChatBot; // Determine si le message provient du chatbot
    private boolean lu;


}
