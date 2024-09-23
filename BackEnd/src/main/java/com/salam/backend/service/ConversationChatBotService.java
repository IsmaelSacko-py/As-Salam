package com.salam.backend.service;

import com.salam.backend.dto.ConversationChatBotDTO;
import com.salam.backend.dto.MessageChatBotDTO;

public interface ConversationChatBotService {
    MessageChatBotDTO ajouterMessageChatBot(MessageChatBotDTO messageChatBotDTO);
    int escalader(ConversationChatBotDTO conversationChatBotDTO);
}
