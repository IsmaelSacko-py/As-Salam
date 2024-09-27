package com.salam.backend.model;

import com.salam.backend.enumeration.EtatConversationChatBot;
import jakarta.persistence.*;
import lombok.Data;

import java.io.Serial;
import java.io.Serializable;
import java.time.LocalDateTime;
import java.util.List;

@Data
@Entity
@Table(name = "conversations_chatbot")
public class ConversationChatBot implements Serializable {
    @Serial
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(nullable = false, unique = true, length = 50)
    private String numero;

    @Column(nullable = false)
    private EtatConversationChatBot statut;

    @ManyToOne
    @JoinColumn(name = "membre_id", referencedColumnName = "id", foreignKey = @ForeignKey(name = "fk_conversationchatbot_membre"))
    private Membre membre;

    @OneToMany(mappedBy = "conversationChatBot")
    private List<MessageChatBot> messageChatBot;

    @ManyToOne
    @JoinColumn(name = "chatbot_id", referencedColumnName = "id", foreignKey = @ForeignKey(name = "fk_conversationchatbot_chatbot"))
    private ChatBot chatBot;
}
