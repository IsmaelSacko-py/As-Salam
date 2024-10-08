package com.salam.backend;

import com.salam.backend.dto.ProfilDTO;
import com.salam.backend.dto.UtilisateurDTO;
import com.salam.backend.dto.VendeurDTO;
import com.salam.backend.service.VendeurService;
import com.salam.backend.service.impl.VendeurServiceImpl;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class BackEndApplication {

    public static void main(String[] args) {
        SpringApplication.run(BackEndApplication.class, args);

    }

}
