package com.salam.backend.controller;


import com.salam.backend.config.JwtUtils;
import com.salam.backend.dto.ClientDTO;
import com.salam.backend.dto.ProfilDTO;
import com.salam.backend.dto.UtilisateurDTO;
import com.salam.backend.dto.VendeurDTO;
import com.salam.backend.filter.JwtFilter;
import com.salam.backend.mapper.*;
import com.salam.backend.model.*;
import com.salam.backend.model.Utilisateur;
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
import java.util.UUID;

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
    private final PanierServiceImpl panierServiceImpl;

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

                Panier panier = new Panier();
                String numPanier = UUID.randomUUID().toString().replace("-", "").substring(0, 10).toUpperCase();
                panier.setNumero(numPanier);

                panierServiceImpl.save(panier);


                log.info("client before {}", user);
                user.setPanier(panier);
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
    public ResponseEntity<?> login (@RequestBody Utilisateur utilisateur){
        log.debug("Rest request to login utilisateur {}", utilisateur);
        try {
            Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(utilisateur.getTelephone(), utilisateur.getPassword()));
            if(authentication.isAuthenticated()){
                Map<String, Object> authData = new HashMap<>();
                utilisateur = utilisateurServiceImpl.findByTelephone(utilisateur.getTelephone());

                authData.put("token", jwtUtils.generateToken(utilisateur.getTelephone()));
                authData.put("type", "Bearer");
                authData.put("user", utilisateur);

                return ResponseEntity.ok(authData);
            }
            return ResponseEntity.badRequest().body("Invalid username or password");
        }catch (AuthenticationException e){
            log.error(e.getMessage());
            return ResponseEntity.badRequest().body("Invalid username or password");
        }
    }
}
