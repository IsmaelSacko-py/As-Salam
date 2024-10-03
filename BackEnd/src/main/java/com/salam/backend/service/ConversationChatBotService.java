package com.salam.backend.service;

import com.salam.backend.dto.ConversationChatBotDTO;
import com.salam.backend.model.ConversationChatBot;

public interface ConversationChatBotService extends CentralRepositoryService<ConversationChatBot> {
    ConversationChatBot escalader(ConversationChatBot conversationChatBot);
}
