package com.salam.backend.service;

import com.salam.backend.dto.DetailPanierDTO;
import com.salam.backend.model.DetailPanier;

public interface DetailPanierService extends CentralRepositoryService<DetailPanier> {
    void deleteByPanierId(int id);
}
