package com.salam.backend.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;
import com.salam.backend.model.Commande;
import com.salam.backend.model.ModePaiement;
import com.salam.backend.model.Paiement;
import com.salam.backend.service.impl.ModePaiementServiceImpl;
import com.salam.backend.service.impl.PaiementServiceImpl;
import com.salam.backend.service.impl.PanierServiceImpl;
import io.jsonwebtoken.Header;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import java.time.Instant;
import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.Map;
import java.util.Optional;
import java.util.UUID;

@Slf4j
@RestController
@RequestMapping("/api/paiement")
@RequiredArgsConstructor
public class PaiementController {


    private final PanierServiceImpl panierServiceImpl;
    @Value("${spring.paytech.url}")
    private String payTechUrl;

    @Value("${spring.paytech.api_key}")
    private String apiKey;

    @Value("${spring.paytech.api_secret}")
    private String apiSecret;

    private final RestTemplate restTemplate;

    private final PaiementServiceImpl paiementService;
    private final ModePaiementServiceImpl modePaiementService;

    private final ObjectMapper mapper = new ObjectMapper();


    @PostMapping("/demande-paiement")
    public ResponseEntity<String> demandePaiement(@RequestBody Commande commande) throws JsonProcessingException {
//        mapper.registerModule(new JavaTimeModule());
//        ObjectMapper mapper = new ObjectMapper();
        mapper.registerModule(new JavaTimeModule());

        HttpHeaders headers = new HttpHeaders();
        headers.add("Accept", "application/json");
        headers.add("Content-Type", "application/json");
        headers.add("API_KEY", apiKey);
        headers.add("API_SECRET", apiSecret);

        Map<String, Object> body = new HashMap<>();
        body.put("item_name", "Iphone 2");
        body.put("item_price", "100");
        body.put("currency", "XOF");
        body.put("ref_command", commande.getNumero());
        body.put("command_name", commande.getNumero());
        body.put("success_url", "http://localhost:4200/checkout-complete?num="+commande.getNumero());
        body.put("cancel_url", "http://localhost:4200/checkout");
        body.put("custom_field", mapper.writerWithDefaultPrettyPrinter().writeValueAsString(commande));
        body.put("env", "test");
        body.put("ipn_url", "https://238c-2001-4278-80-a60c-1dbe-b09e-3d2b-356d.ngrok-free.app/api/paiement/effectuer-paiement");

        HttpEntity<Map<String, Object>> entity = new HttpEntity<>(body, headers);

        return ResponseEntity.ok(restTemplate.postForObject(payTechUrl, entity, String.class));
    }

    @PostMapping("/effectuer-paiement")
    public ResponseEntity<Paiement> effectuerPaiement(@RequestParam Map<String, Object> response) throws JsonProcessingException {
        mapper.registerModule(new JavaTimeModule());

        Commande commande = mapper.readValue(response.get("custom_field").toString(), Commande.class);
        panierServiceImpl.viderPanier(commande.getClient().getPanier());

        Optional<ModePaiement> modePaiement = modePaiementService.findOne(1);
        Paiement paiement = new Paiement();
        String numeroPaiement = UUID.randomUUID().toString().replace("-", "").substring(0, 10).toUpperCase();
        paiement.setNumero(numeroPaiement);
        paiement.setModePaiement(modePaiement.get());
        paiement.setMontant(Double.parseDouble(response.get("item_price").toString()));
        paiement.setDate(LocalDateTime.now());
        paiement.setEtat(true);
        paiement.setCommande(commande);

        paiement = paiementService.save(paiement);
        log.debug("Payment method: {}", response.get("payment_method"));
        return ResponseEntity.ok(paiement);
    }


}
