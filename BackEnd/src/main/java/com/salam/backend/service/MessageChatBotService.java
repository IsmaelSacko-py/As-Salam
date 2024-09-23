package com.salam.backend.service;

import com.salam.backend.dto.MessageChatBotDTO;

public interface MessageChatBotService {
    int envoyerMessage(MessageChatBotDTO messageChatBotDTO);
    int recevoirMessage(MessageChatBotDTO messageChatBotDTO);
    void marquerCommeLu(MessageChatBotDTO messageChatBotDTO);
}
