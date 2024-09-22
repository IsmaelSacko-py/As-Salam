package com.salam.backend.repository;

import com.salam.backend.model.MessageChatBot;
import com.salam.backend.model.Vendeur;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MessageChatBotRepository extends JpaRepository<MessageChatBot, Integer> {
}
