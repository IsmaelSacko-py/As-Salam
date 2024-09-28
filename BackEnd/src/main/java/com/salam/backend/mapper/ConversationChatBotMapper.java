package com.salam.backend.mapper;

import com.salam.backend.dto.ConversationChatBotDTO;
import com.salam.backend.model.ChatBot;
import com.salam.backend.model.ConversationChatBot;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface ConversationChatBotMapper extends EntityMapper<ConversationChatBotDTO, ConversationChatBot> {

}
