export enum EtatConversationChatBot {
  OUVERTE = 'Ouverte',      // La conversation est en cours.
  FERME = 'Fermée',        // Le problème a été résolu et la conversation est terminée.
  ESCALADEE = 'Escaladée'   // La demande a été transférée à un expert humain ou à un niveau supérieur.
}
