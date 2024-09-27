package com.salam.backend.service.impl;

import com.salam.backend.dto.ConversationChatBotDTO;
import com.salam.backend.dto.MessageChatBotDTO;
import com.salam.backend.service.ConversationChatBotService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.Optional;

public class ConversationChatBotServiceImpl implements ConversationChatBotService {


    @Override
    public ConversationChatBotDTO escalader(ConversationChatBotDTO conversationChatBotDTO) {
        return null;
    }

    @Override
    public ConversationChatBotDTO save(ConversationChatBotDTO conversationChatBotDTO) {
        return null;
    }

    @Override
    public ConversationChatBotDTO update(ConversationChatBotDTO conversationChatBotDTO) {
        return null;
    }

    @Override
    public Optional<ConversationChatBotDTO> partialUpdate(ConversationChatBotDTO conversationChatBotDTO) {
        return Optional.empty();
    }

    @Override
    public Page<ConversationChatBotDTO> findAll(Pageable pageable) {
        return null;
    }

    @Override
    public Optional<ConversationChatBotDTO> findOne(Long id) {
        return Optional.empty();
    }

    @Override
    public void delete(Long id) {

    }
}
