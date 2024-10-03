import {Produit} from "./Produit.model";

export interface Categorie {
  // Attributs publics
  id: number
  numero: string;
  libelle: string;
  categorie: Categorie | null; // Peut être null si aucune catégorie parente
  sousCategories: Categorie[];
  produits: Produit[]; // Assurez-vous d'avoir un modèle Produit défini

}
