import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'  // Assure-toi que le service est fourni à l'échelle de l'application
})
export class CommunicationService {

  // Crée un Subject pour émettre des événements
  private actionSubject = new Subject<void>();

  // Observable que d'autres composants peuvent écouter
  action$ = this.actionSubject.asObservable();

  // Méthode pour émettre l'action signifiant que les données de l'utilisateur ont changées
  triggerAction() {
    this.actionSubject.next();  // L'événement est émis sans données (void)
  }
}
