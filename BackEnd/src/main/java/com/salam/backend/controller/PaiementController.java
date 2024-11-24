package com.salam.backend.controller;

import io.jsonwebtoken.Header;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import java.util.HashMap;
import java.util.Map;

@Slf4j
@RequiredArgsConstructor
@RestController
@RequestMapping("/api/paiement")
public class PaiementController {

    @Value("${spring.paytech.api_key}")
    private String apiKey;

    @Value("${spring.paytech.api_secret}")
    private String apiSecret;

    private final RestTemplate restTemplate;

    @GetMapping
    public ResponseEntity<String> effectuerPaiement(){
        final String url = "https://paytech.sn/api/payment/request-payment";

        HttpHeaders headers = new HttpHeaders();
        headers.add("Accept", "application/json");
        headers.add("Content-Type", "application/json");
        headers.add("API_KEY", apiKey);
        headers.add("API_SECRET", apiSecret);

        Map<String, Object> body = new HashMap<>();
        body.put("item_name", "Iphone 2");
        body.put("item_price", 300);
        body.put("currency", "XOF");
        body.put("ref_command", "XXwwDSS");
        body.put("command_name", "Juste un test");
        body.put("env", "test");
        body.put("ipn_url", "https://domaine.com/ipn");

        HttpEntity<Map<String, Object>> entity = new HttpEntity<>(body, headers);


        return restTemplate.exchange(url, HttpMethod.POST, entity, String.class);
    }


}
