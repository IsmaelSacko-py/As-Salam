import {Categorie} from "./Categorie.model";
import {DetailPanier} from "./DetailPanier.model";
import {Panier} from "./Panier.model";
import {Commande} from "./Commande.model";
import {ConversationChatBot} from "./ConversationChatBot.model";
import {Adresse} from "./Adresse.model";

export interface Membre {
  dateInscription: string;  // Format ISO pour la date
  status: boolean;          // Statut du membre (actif/inactif)

  adresses: Adresse[];                    // Liste des adresses du membre
  conversationsChatBot: ConversationChatBot[]; // Liste des conversations avec le chatbot
  commandes: Commande[];                    // Liste des commandes du membre
  panier: Panier;
}
