import {Categorie} from "./Categorie.model";
import {Profil} from "./Profil.model";
import {ConversationChatBot} from "./ConversationChatBot.model";

export interface MessageChatBot {
  id: number;                                  // Identifiant du message
  contenu: string;                             // Contenu du message
  date: string;                                // Date du message, typiquement en format ISO
  isChatBot: boolean;                          // Indique si le message provient du chatbot
  lu: boolean;                                 // Indique si le message a été lu

  conversationChatBot: ConversationChatBot; // Conversation associée au message
}
