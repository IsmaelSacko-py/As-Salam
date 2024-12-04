import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment.development";
import {AuthService} from "./auth.service";

@Injectable({
  providedIn: 'root'
})
export class CommandeService {

  private resourceUrl = environment.apiUrl

  constructor(private httpClient: HttpClient, private authService: AuthService) { }

  userCommandes(userId: number, page?: number, size?: number): Observable<any>{
    const profil = this.authService.getUser().profil.nom
    const typeUser = profil === 'client'? profil : 'vendeur'
    return this.httpClient.get(`${this.resourceUrl}/commandes/${typeUser}/${userId}?page=${page}&size=${size}`)
  }

  getCommande(commandeId: number): Observable<any>{
    return this.httpClient.get(`${this.resourceUrl}/commandes/${commandeId}`)
  }

  updateOrder(order: any): Observable<any>{
    console.log(order)
    return this.httpClient.put(`${this.resourceUrl}/commandes`, order)
  }

  // clientCommandesRecentes(clientId: number): Observable<any>{
  //   return this.httpClient.get(`${this.resourceUrl}/commandes/commandes-recentes/client/${clientId}`)
  // }
}
