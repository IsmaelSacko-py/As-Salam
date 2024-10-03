package com.salam.backend.service.impl;

import com.salam.backend.model.Image;
import com.salam.backend.repository.ImageRepository;
import com.salam.backend.service.ImageService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Slf4j
@Service
@Transactional
public class ImageServiceImpl implements ImageService {
    private final ImageRepository imageRepository;
//    private final ImageMapper imageMapper;

    public ImageServiceImpl(ImageRepository imageRepository) {
        this.imageRepository = imageRepository;
    }

    @Override
    public Image save(Image image) {
        log.debug("Request to save Image : {}", image);
//        Image image = imageMapper.toEntity(image);
        image = imageRepository.save(image);
        return image;
    }

    @Override
    public Image update(Image image) {
        return null;
    }

    @Override
    public Optional<Image> partialUpdate(Image image) {
        return Optional.empty();
    }

    @Override
    public Page<Image> findAll(Pageable pageable) {
        return null;
    }

    @Override
    public Optional<Image> findOne(Integer id) {
        return Optional.empty();
    }

    @Override
    public void delete(Integer id) {

    }
}
