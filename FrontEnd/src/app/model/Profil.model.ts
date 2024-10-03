import {Categorie} from "./Categorie.model";
import {Utilisateur} from "./Utilisateur.model";

export interface Profil {
  id: number;                                // Identifiant du profil
  nom: string;                               // Nom du profil
  utilisateurs: Utilisateur[];

}
