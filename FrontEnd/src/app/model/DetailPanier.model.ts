import {Produit} from "./Produit.model";
import {Panier} from "./Panier.model";

export interface DetailPanier {
  id?: number;             // Identifiant unique
  quantite: number;      // Quantité de produit dans le panier
  montant: number;       // Montant total pour un produit
  produit: Produit;    // Référence au produit
  panier: Panier | null;
}
