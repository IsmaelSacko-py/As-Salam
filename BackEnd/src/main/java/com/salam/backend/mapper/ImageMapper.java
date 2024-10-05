package com.salam.backend.mapper;

import com.salam.backend.dto.CategorieDTO;
import com.salam.backend.dto.ImageDTO;
import com.salam.backend.dto.ProduitDTO;
import com.salam.backend.dto.ProfilDTO;
import com.salam.backend.model.Categorie;
import com.salam.backend.model.Image;
import com.salam.backend.model.Produit;
import com.salam.backend.model.Profil;
import org.mapstruct.BeanMapping;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Named;
import org.mapstruct.factory.Mappers;

import java.util.List;

@Mapper(componentModel = "spring")
public interface ImageMapper {
    ImageMapper INSTANCE = Mappers.getMapper(ImageMapper.class);

//    // Mapping Entité -> DTO
//    @Mapping(source = "produit", target = "produit")  // Mapping pour le produit associé
    ImageDTO toDto(Image image);
//
//    // Mapping DTO -> Entité
//    @Mapping(source = "produit", target = "produit")
    Image toEntity(ImageDTO imageDTO);

}
