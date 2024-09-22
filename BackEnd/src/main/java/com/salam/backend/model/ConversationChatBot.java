package com.salam.backend.model;

import com.salam.backend.enumeration.EtatConversationChatBot;
import jakarta.persistence.*;
import lombok.Data;

import java.io.Serial;
import java.io.Serializable;
import java.time.LocalDateTime;

@Entity
@Data
public class ConversationChatBot implements Serializable {
    @Serial
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(nullable = false, unique = true)
    private String numero;

    @Column(nullable = false)
    private EtatConversationChatBot statut;
}
