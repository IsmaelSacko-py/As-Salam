package com.salam.backend.mapper;

import com.salam.backend.model.Utilisateur;
import org.mapstruct.*;

import java.util.List;

public interface EntityMapper<Dto, Entity> {
    Entity toEntity(Dto dto);
    Dto toDto(Entity entity);
    List<Entity> toEntity(List<Dto> dtoList);

    List<Dto> toDto(List<Entity> entityList);

    @Named("partialUpdate")
    @BeanMapping(nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE)
    void partialUpdate(@MappingTarget Entity entity, Dto dto);
}
