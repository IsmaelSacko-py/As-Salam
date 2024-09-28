package com.salam.backend.mapper;

import com.salam.backend.dto.ImageDTO;
import com.salam.backend.dto.ProfilDTO;
import com.salam.backend.model.Image;
import com.salam.backend.model.Profil;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface ImageMapper extends EntityMapper<ImageDTO, Image> {

}
