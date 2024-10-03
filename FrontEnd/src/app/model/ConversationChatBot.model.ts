import {Categorie} from "./Categorie.model";
import {Utilisateur} from "./Utilisateur.model";
import {Membre} from "./Membre.model";
import {ChatBot} from "./ChatBot.model";
import {MessageChatBot} from "./MessageChatBot.model";
import {EtatConversationChatBot} from "../enum/EtatConversationChatBot";

export interface ConversationChatBot {
  id: number;                             // Identifiant de la conversation
  numero: string;                         // Numéro de la conversation
  statut: EtatConversationChatBot;        // Statut de la conversation

  membre: Membre;                      // Membre associé à cette conversation
  chatBot: ChatBot;                    // ChatBot associé à cette conversation
  messages: MessageChatBot[];

}
