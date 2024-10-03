import {Categorie} from "./Categorie.model";
import {DetailPanier} from "./DetailPanier.model";
import {Membre} from "./Membre.model";
import {Paiement} from "./Paiement.model";

export interface Recu {
  id: number;                   // Identifiant du reçu
  numero: string;              // Numéro du reçu
  date: string;                // Date du reçu, typiquement en format ISO
  montant: number;             // Montant du reçu

  paiement: Paiement;
}
