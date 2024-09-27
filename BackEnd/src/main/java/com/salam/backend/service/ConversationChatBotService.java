package com.salam.backend.service;

import com.salam.backend.dto.ConversationChatBotDTO;

public interface ConversationChatBotService extends CentralRepositoryService<ConversationChatBotDTO> {
    ConversationChatBotDTO escalader(ConversationChatBotDTO conversationChatBotDTO);
}
