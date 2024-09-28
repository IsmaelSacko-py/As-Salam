package com.salam.backend.mapper;

import com.salam.backend.model.Utilisateur;
import org.mapstruct.Mapper;

import java.util.List;

public interface EntityMapper<Dto, Entity> {
    Entity toEntity(Dto dto);
    Dto toDto(Entity entity);
    List<Dto> toDtoist(List<Entity> entities);
}
