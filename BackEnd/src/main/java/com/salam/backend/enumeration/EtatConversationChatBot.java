package com.salam.backend.enumeration;

public enum EtatConversationChatBot {
    Ouverte, //La conversation est en cours.
    Fermée,  //Le problème a été résolu et la conversation est terminée.
    Escaladée, // La demande a été transférée à un expert humain ou à un niveau supérieur.
}
