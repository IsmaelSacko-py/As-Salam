package com.salam.backend.service.impl;

import com.salam.backend.dto.MessageChatBotDTO;
import com.salam.backend.model.ConversationChatBot;
import com.salam.backend.service.ConversationChatBotService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.Optional;

public class ConversationChatBotServiceImpl implements ConversationChatBotService {


    @Override
    public ConversationChatBot escalader(ConversationChatBot conversationChatBot) {
        return null;
    }

    @Override
    public ConversationChatBot save(ConversationChatBot conversationChatBot) {
        return null;
    }

    @Override
    public ConversationChatBot update(ConversationChatBot conversationChatBot) {
        return null;
    }

    @Override
    public Optional<ConversationChatBot> partialUpdate(ConversationChatBot conversationChatBot) {
        return Optional.empty();
    }

    @Override
    public Page<ConversationChatBot> findAll(Pageable pageable) {
        return null;
    }

    @Override
    public Optional<ConversationChatBot> findOne(Integer id) {
        return Optional.empty();
    }

    @Override
    public void delete(Integer id) {

    }
}
