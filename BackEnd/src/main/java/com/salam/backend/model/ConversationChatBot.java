package com.salam.backend.model;

import com.salam.backend.enumeration.EtatConversationChatBot;
import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDateTime;

@Entity
@Data
public class ConversationChatBot {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(nullable = false, unique = true)
    private String numero;

    @Column(nullable = false)
    private EtatConversationChatBot statut;
}
