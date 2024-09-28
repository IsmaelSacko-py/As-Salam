package com.salam.backend.mapper;

import com.salam.backend.dto.MessageChatBotDTO;
import com.salam.backend.model.ConversationChatBot;
import com.salam.backend.model.MessageChatBot;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface MessageChatBotMapper extends EntityMapper<MessageChatBotDTO, MessageChatBot> {

}
