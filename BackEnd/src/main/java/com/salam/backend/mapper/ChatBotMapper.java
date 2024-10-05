package com.salam.backend.mapper;

import com.salam.backend.dto.ChatBotDTO;
import com.salam.backend.dto.CommandeDTO;
import com.salam.backend.model.ChatBot;
import com.salam.backend.model.Commande;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.factory.Mappers;

@Mapper(componentModel = "spring")
public interface ChatBotMapper {
    ChatBotMapper INSTANCE = Mappers.getMapper(ChatBotMapper.class);

    // Mapping Entité -> DTO
    @Mapping(source = "conversationsChatBot", target = "conversationsChatBot")
    ChatBotDTO toDto(ChatBot chatBot);

    // Mapping DTO -> Entité
    @Mapping(source = "conversationsChatBot", target = "conversationsChatBot")
    ChatBot toEntity(ChatBotDTO chatBotDTO);
}
