package com.salam.backend.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Data;

import java.io.Serial;
import java.io.Serializable;
import java.time.LocalDateTime;

@Data
@Entity
@Table(name = "messages_chatbot")
public class MessageChatBot {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @NotBlank(message = "veuillez saisir un message")
    @Size(max = 255, message = "message trop long. Maximum 255 caractères")
    @Column(nullable = false)
    private String contenu;

    @Column(nullable = false)
    private LocalDateTime date;

    @Column(nullable = false)
    private boolean isChatBot;

    private boolean lu = false;

    @ManyToOne
    @JoinColumn(name = "conversationchatbot_id", referencedColumnName = "id", foreignKey = @ForeignKey(name = "fk_messagechatbot_conversationchatbot"))
    private ConversationChatBot conversationChatBot;

}
