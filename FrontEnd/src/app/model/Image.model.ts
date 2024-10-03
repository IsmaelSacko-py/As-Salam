import {Produit} from "./Produit.model";

export interface Image{
  id: number;
  url: string;
  produit: Produit; // Clé étrangère facultative si l'image peut ne pas être liée à un produit

}
