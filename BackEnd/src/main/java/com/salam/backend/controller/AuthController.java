package com.salam.backend.controller;


import com.salam.backend.config.JwtUtils;
import com.salam.backend.dto.ClientDTO;
import com.salam.backend.dto.ProfilDTO;
import com.salam.backend.dto.UtilisateurDTO;
import com.salam.backend.dto.VendeurDTO;
import com.salam.backend.filter.JwtFilter;
import com.salam.backend.mapper.*;
import com.salam.backend.model.Utilisateur;
import com.salam.backend.model.Client;
import com.salam.backend.model.Utilisateur;
import com.salam.backend.model.Vendeur;
import com.salam.backend.service.ClientService;
import com.salam.backend.service.UtilisateurService;
import com.salam.backend.service.VendeurService;
import com.salam.backend.service.impl.*;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.Map;

@Slf4j
@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
public class AuthController {

    private final UtilisateurServiceImpl<Utilisateur> utilisateurServiceImpl;
    private final UtilisateurMapper utilisateurMapper;

    private final ClientServiceImpl<Client> clientService;
    private final ClientMapper clientMapper;

    private final VendeurServiceImpl vendeurService;
    private final VendeurMapper vendeurMapper;

    private final PasswordEncoder passwordEncoder;
    private final AuthenticationManager authenticationManager;
    private final JwtUtils jwtUtils;

    @PostMapping("/register")
    public ResponseEntity<?> register (@RequestBody UtilisateurDTO utilisateurDTO){
        log.info("Rest request to register utilisateur {}", utilisateurDTO);
        if(vendeurService.findByTelephone(utilisateurDTO.getTelephone()) != null){
            ResponseEntity.badRequest().body("userName already exist");
        }

        utilisateurDTO.setPassword(passwordEncoder.encode(utilisateurDTO.getPassword()));

//        Vendeur vendeur = vendeurMapper.toEntity(utilisateurDTO);
//        user = vendeurService.save(user);
//        return ResponseEntity.ok(user);


        return switch (utilisateurDTO.getProfil().getNom()) {
            case "client" -> {
                ClientDTO clientDTO = new ClientDTO();
                clientDTO.setName(utilisateurDTO.getName());
                clientDTO.setSurname(utilisateurDTO.getSurname());
                clientDTO.setEmail(utilisateurDTO.getEmail());
                clientDTO.setTelephone(utilisateurDTO.getTelephone());
                clientDTO.setPassword(utilisateurDTO.getPassword());
                clientDTO.setProfil(utilisateurDTO.getProfil());
                clientDTO.setStatus(true);
                clientDTO.setDateInscription(LocalDateTime.now());

                Client user = clientMapper.toEntity(clientDTO);

                log.info("client before {}", user);
                Client client = clientService.save(user);
                log.info("client after {}", client);
                yield ResponseEntity.ok(clientMapper.toDto(client));
            }
            case "vendeur" -> {
                VendeurDTO vendeurDTO = new VendeurDTO();
                vendeurDTO.setName(utilisateurDTO.getName());
                vendeurDTO.setSurname(utilisateurDTO.getSurname());
                vendeurDTO.setEmail(utilisateurDTO.getEmail());
                vendeurDTO.setTelephone(utilisateurDTO.getTelephone());
                vendeurDTO.setPassword(utilisateurDTO.getPassword());
                vendeurDTO.setProfil(utilisateurDTO.getProfil());
                vendeurDTO.setStatus(true);
                vendeurDTO.setDateInscription(LocalDateTime.now());

                Vendeur user = vendeurMapper.toEntity(vendeurDTO);

                log.info("vendeur before {}", user);
                Vendeur vendeur = vendeurService.save(user);
                log.info("vendeur after {}", vendeur);
                yield ResponseEntity.ok(vendeurMapper.toDto(vendeur));
            }
            default -> ResponseEntity.badRequest().body("Invalid username or password");
        };

    }

    @PostMapping("/login")
    public ResponseEntity<?> login (@RequestBody UtilisateurDTO utilisateurDTO){
        log.debug("Rest request to login utilisateur {}", utilisateurDTO);
        try {
            Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(utilisateurDTO.getTelephone(), utilisateurDTO.getPassword()));
            if(authentication.isAuthenticated()){
                Map<String, Object> authData = new HashMap<>();
                Utilisateur user = utilisateurServiceImpl.findByTelephone(utilisateurDTO.getTelephone());
                log.info("Utilisateur find {}", user);
                utilisateurDTO = utilisateurMapper.toDto(user);
                log.info("utilisateur toDto {}", utilisateurDTO);

                authData.put("token", jwtUtils.generateToken(utilisateurDTO.getTelephone()));
                authData.put("type", "Bearer");
                authData.put("user", utilisateurDTO);

                return ResponseEntity.ok(authData);
            }
            return ResponseEntity.badRequest().body("Invalid username or password");
        }catch (AuthenticationException e){
            log.error(e.getMessage());
            return ResponseEntity.badRequest().body("Invalid username or password");
        }
    }
}
