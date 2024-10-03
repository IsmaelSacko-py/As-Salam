import {Categorie} from "./Categorie.model";
import {DetailPanier} from "./DetailPanier.model";
import {DetailCommande} from "./DetailCommande.model";
import {Membre} from "./Membre.model";
import {Paiement} from "./Paiement.model";

export interface Commande {
  id: number;                      // Identifiant de la commande
  numero: string;                  // Numéro de la commande
  date: string;                    // Date de la commande en format ISO
  statut: string;                  // État de la commande (par exemple, "EN_COURS", "TERMINE", etc.)
  totalPrix: number;               // Montant total de la commande

  membre: Membre;               // Référence au membre ayant passé la commande
  paiement: Paiement;           // Détails du paiement
  details: DetailCommande[];    // Liste des détails de la commande
}
