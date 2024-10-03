import {Categorie} from "./Categorie.model";
import {DetailPanier} from "./DetailPanier.model";
import {Membre} from "./Membre.model";

export interface Panier {
  id: number;                  // Identifiant unique du panier
  totalPrix: number;          // Montant total du panier
  detailsPanier: DetailPanier[]; // Détails des produits dans le panier
  membre: Membre;
}
