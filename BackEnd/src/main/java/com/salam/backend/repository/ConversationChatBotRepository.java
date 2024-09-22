package com.salam.backend.repository;

import com.salam.backend.model.ConversationChatBot;
import com.salam.backend.model.MessageChatBot;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ConversationChatBotRepository extends JpaRepository<ConversationChatBot, Integer> {
}
