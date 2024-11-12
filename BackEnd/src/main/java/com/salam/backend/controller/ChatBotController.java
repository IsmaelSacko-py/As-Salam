package com.salam.backend.controller;


import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@Slf4j
@RestController
@RequestMapping("/botpress")
public class ChatBotController {

    @PostMapping("/webhook")
    public ResponseEntity<Map<String, Object>> receiveBotResponse(@RequestBody Map<String, Object> botResponse) {
        log.debug("Received botResponse: " + botResponse);
        // Logique de traitement de la réponse du bot
//        String response = "Réponse reçue du bot: " + botResponse;
        return ResponseEntity.ok(botResponse);
        // Tu peux ici parser le botResponse et déclencher des actions en fonction de la réponse
    }
}
