import {Produit} from "./Produit.model";
import {Commande} from "./Commande.model";

export interface DetailCommande {
  id: number;              // Identifiant unique
  quantite: number;       // Quantité de produit dans la commande
  montant: number;        // Montant total pour ce détail de commande
  produit: Produit;     // Référence au produit
  commande: Commande;   // Référence à la commande
}
