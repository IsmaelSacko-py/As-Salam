package com.salam.backend.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.salam.backend.enumeration.EtatConversationChatBot;
import jakarta.persistence.*;
import lombok.Data;

import java.util.List;

@Data
@Entity
@Table(name = "conversations_chatbot")
//@JsonIgnoreProperties({"client", "chatBot"})
public class ConversationChatBot {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(nullable = false, unique = true, length = 50)
    private String numero;

    @Column(nullable = false)
    private EtatConversationChatBot statut;

    @ManyToOne
    @JoinColumn(name = "client_id", referencedColumnName = "id", foreignKey = @ForeignKey(name = "fk_conversationchatbot_client"))
    private Client client;

    @OneToMany(mappedBy = "conversationChatBot")
    @JsonIgnoreProperties(value = {"conversationChatBot"}, allowSetters = true)
    private List<MessageChatBot> messageChatBot;

    @ManyToOne
    @JoinColumn(name = "chatbot_id", referencedColumnName = "id", foreignKey = @ForeignKey(name = "fk_conversationchatbot_chatbot"))
    private ChatBot chatBot;
}
