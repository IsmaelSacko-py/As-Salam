package com.salam.backend.service;

import com.salam.backend.dto.CommandeDTO;
import com.salam.backend.dto.ProfilDTO;
import com.salam.backend.model.Profil;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

public interface ProfilService extends CentralRepositoryService<Profil> {
}
