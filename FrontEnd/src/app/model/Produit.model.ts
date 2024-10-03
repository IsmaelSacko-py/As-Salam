import {Categorie} from "./Categorie.model";
import {Image} from "./Image.model";

export interface Produit {
  id: number;
  bloque: boolean;
  dateAjout: Date;
  description: string;
  disponible: boolean;
  libelle: string;
  numero: string;
  prix: number;
  quantite: number;
  remise: number;
  images: Image[];
  categorie: Categorie; // Clé étrangère facultative si la catégorie peut être null

}
