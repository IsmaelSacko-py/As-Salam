import {Categorie} from "./Categorie.model";
import {Image} from "./Image.model";
import {DetailCommande} from "./DetailCommande.model";
import {DetailPanier} from "./DetailPanier.model";

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
  detailsCommande: DetailCommande[]
  detailsPanier: DetailPanier[]
  categorie: Categorie; // Clé étrangère facultative si la catégorie peut être null

}
