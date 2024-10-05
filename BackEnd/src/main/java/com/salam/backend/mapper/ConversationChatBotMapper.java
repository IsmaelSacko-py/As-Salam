package com.salam.backend.mapper;

import com.salam.backend.dto.ConversationChatBotDTO;
import com.salam.backend.model.ChatBot;
import com.salam.backend.model.ConversationChatBot;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.factory.Mappers;

@Mapper(componentModel = "spring")
public interface ConversationChatBotMapper {
    ConversationChatBotMapper INSTANCE = Mappers.getMapper(ConversationChatBotMapper.class);

    // Mapping Entité -> DTO
    @Mapping(source = "messageChatBot", target = "messageChatBot")
    ConversationChatBotDTO toDto(ConversationChatBot conversationChatBot);

    // Mapping DTO -> Entité
    @Mapping(source = "messageChatBot", target = "messageChatBot")
    ConversationChatBot toEntity(ConversationChatBotDTO conversationChatBotDTO);
}
