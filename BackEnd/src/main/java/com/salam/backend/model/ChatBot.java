package com.salam.backend.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Data;

import java.io.Serial;
import java.io.Serializable;
import java.time.LocalDateTime;
import java.util.List;

@Data
@Entity
@Table(name = "chatbot")
public class ChatBot implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(nullable = false, unique = true, length = 50)
    private String nom;

    @Column(nullable = false, length = 50)
    private String langue;

    @OneToMany(mappedBy = "chatBot")
    @JsonIgnoreProperties(value = {"chatBot"}, allowSetters = true)
    private List<ConversationChatBot> conversationsChatBot;

}
