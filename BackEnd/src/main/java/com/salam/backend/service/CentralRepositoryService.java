package com.salam.backend.service;


import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.Optional;


public interface CentralRepositoryService<Entity> {

    /**
     * Save a entity.
     *
     * @param entity the entity to save.
     * @return the persisted entity.
     */
    Entity save(Entity entity);

    /**
     * Updates a entity.
     *
     * @param entity the entity to update.
     * @return the persisted entity.
     */
    Entity update(Entity entity);

    /**
     * Partially updates a entity.
     *
     * @param entity the entity to update partially.
     * @return the persisted entity.
     */
    Optional<Entity> partialUpdate(Entity entity);

    /**
     * Get all the entities.
     *
     * @param pageable the pagination information.
     * @return the list of entities.
     */
    Page<Entity> findAll(Pageable pageable);

    /**
     * Get the "id" entity.
     *
     * @param id the id of the entity.
     * @return the entity.
     */
    Optional<Entity> findOne(Long id);

    /**
     * Delete the "id" entity.
     *
     * @param id the id of the entity.
     */
    void delete(Long id);

}
