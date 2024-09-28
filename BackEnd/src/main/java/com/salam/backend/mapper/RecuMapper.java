package com.salam.backend.mapper;

import com.salam.backend.dto.RecuDTO;
import com.salam.backend.model.ConversationChatBot;
import com.salam.backend.model.Recu;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface RecuMapper extends EntityMapper<RecuDTO, Recu> {

}
