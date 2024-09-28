package com.salam.backend.mapper;

import com.salam.backend.dto.ChatBotDTO;
import com.salam.backend.dto.CommandeDTO;
import com.salam.backend.model.ChatBot;
import com.salam.backend.model.Commande;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface ChatBotMapper extends EntityMapper<ChatBotDTO, ChatBot> {

}
