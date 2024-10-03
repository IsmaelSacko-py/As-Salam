import {Categorie} from "./Categorie.model";
import {Profil} from "./Profil.model";
import {Commande} from "./Commande.model";
import {Recu} from "./Recu.model";

export interface Paiement {
  id: number;                   // Identifiant du paiement
  numero: string;              // Numéro de paiement
  montant: number;             // Montant du paiement
  date: string;                // Date du paiement, typiquement en format ISO
  etat: boolean;               // État du paiement

  recu: Recu;               // Reçu associé au paiement
  commande: Commande;       // Commande associée au paiement
}
