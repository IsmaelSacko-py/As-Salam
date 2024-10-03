import {Categorie} from "./Categorie.model";
import {Profil} from "./Profil.model";

export interface Utilisateur {
  id: number;                   // Identifiant de l'utilisateur
  nom: string;                  // Nom de l'utilisateur
  prenom: string;               // Prénom de l'utilisateur
  email: string;                // Adresse e-mail de l'utilisateur
  telephone: string;            // Numéro de téléphone de l'utilisateur
  motDePasse: string;           // Mot de passe de l'utilisateur

  profil: Profil;
}
