package com.salam.backend.service;

import com.salam.backend.model.MessageChatBot;

public interface MessageChatBotService {
    int envoyerMessage(MessageChatBot messageChatBot);
    int recevoirMessage(MessageChatBot messageChatBot);
    void marquerCommeLu(MessageChatBot messageChatBot);
}
