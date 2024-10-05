package com.salam.backend.mapper;

import com.salam.backend.dto.MessageChatBotDTO;
import com.salam.backend.model.ConversationChatBot;
import com.salam.backend.model.MessageChatBot;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.factory.Mappers;

@Mapper(componentModel = "spring")
public interface MessageChatBotMapper {
    MessageChatBotMapper INSTANCE = Mappers.getMapper(MessageChatBotMapper.class);

//    // Mapping Entité -> DTO
//    @Mapping(source = "conversationChatBot", target = "conversationChatBot")  // Mapping pour la conversation associée
    MessageChatBotDTO toDto(MessageChatBot messageChatBot);
//
//    // Mapping DTO -> Entité
//    @Mapping(source = "conversationChatBot", target = "conversationChatBot")
    MessageChatBot toEntity(MessageChatBotDTO messageChatBotDTO);
}
