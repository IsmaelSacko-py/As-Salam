package com.salam.backend.controller;

import com.salam.backend.model.Client;
import com.salam.backend.model.Profil;
import com.salam.backend.model.Client;
import com.salam.backend.model.Vendeur;
import com.salam.backend.service.impl.ClientServiceImpl;
import com.salam.backend.service.impl.ProfilServiceImpl;
import com.salam.backend.service.impl.ClientServiceImpl;
import com.salam.backend.service.impl.VendeurServiceImpl;
import jakarta.persistence.EntityNotFoundException;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PagedResourcesAssembler;
import org.springframework.hateoas.EntityModel;
import org.springframework.hateoas.PagedModel;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@Slf4j
@RestController
@RequestMapping("/api/clients")
public class ClientController {
    private final ClientServiceImpl<Client> clientService;
    private final ProfilServiceImpl profilService;
    private final PagedResourcesAssembler<Client> pagedResourcesAssembler;

    public ClientController(ClientServiceImpl<Client> clientService, VendeurServiceImpl vendeurService, ProfilServiceImpl profilService, PagedResourcesAssembler<Client> pagedResourcesAssembler) {
        this.clientService = clientService;
        this.profilService = profilService;
        this.pagedResourcesAssembler = pagedResourcesAssembler;
    }

    @GetMapping
    public ResponseEntity<PagedModel<EntityModel<Client>>> findAll(Pageable pageable) {
        log.info("Rest request to find all clients");
        Page<Client> clients = clientService.findAll(pageable);
        return ResponseEntity.ok(pagedResourcesAssembler.toModel(clients));
    }

    @GetMapping("/{id}")
    public ResponseEntity<Client> getClientById(@PathVariable(value = "id") int id) {
        log.debug("Rest request to get Client by id {}", id);
        Optional<Client> client = clientService.findOne(id);
        return client.map( user ->
            ResponseEntity.ok().body(user)
        ).orElseGet( ()  ->
            ResponseEntity.notFound().build()
        );

    }

    @GetMapping("/login/{login}")
    public ResponseEntity<Client> getClientByLogin(@PathVariable(value = "login") String login) {
        log.debug("Rest request to get Client by login {}", login);
        Client client = clientService.findByTelephone(login);
        return ResponseEntity.ok(client);

    }


    @PostMapping
    public ResponseEntity<Client> createClient(@RequestBody Client client) {
        log.info("Rest request to create new client");
        Optional<Profil> profilDTO = profilService.findOne(1);
        return profilDTO.map(existingProfil -> {
            client.setProfil(existingProfil);
            Client user = clientService.save(client);
            return ResponseEntity.ok().body(user);
        }).orElseGet(() -> ResponseEntity.badRequest().build());

    }

    @PutMapping("/update")
    public ResponseEntity<Client> updateUser(@RequestBody Client client) {
        Client client1 = clientService.update(client);
        if (client != null) {
            return ResponseEntity.ok().body(client1);
        }
        return ResponseEntity.notFound().build();
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Client> deleteUser(@PathVariable int id) {
        try{
            clientService.delete(id);
            return ResponseEntity.ok().build();
        }catch (EntityNotFoundException e){
            return ResponseEntity.notFound().build();
        }
    }
}
