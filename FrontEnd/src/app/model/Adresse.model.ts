import {Categorie} from "./Categorie.model";
import {Membre} from "./Membre.model";
import {TypeAdresse} from "../enum/TypeAdresse";

export interface Adresse {
  id: number;                 // Identifiant de l'adresse
  nom: string;                // Nom de l'adresse
  rue: string;                // Rue de l'adresse
  typeAdresse: TypeAdresse;   // Type de l'adresse, assurez-vous que TypeAdresse est défini

  membres: Membre[];
}
