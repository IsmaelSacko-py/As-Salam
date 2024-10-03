import {Categorie} from "./Categorie.model";
import {ConversationChatBot} from "./ConversationChatBot.model";

export interface ChatBot {
  id: number;                                 // Identifiant du ChatBot
  nom: string;                                // Nom du ChatBot
  langue: string;                             // Langue du ChatBot

  conversations: ConversationChatBot[];   // Liste des conversations associées au ChatBot

}
