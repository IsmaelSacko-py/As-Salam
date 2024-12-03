import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment.development";

@Injectable({
  providedIn: 'root'
})
export class CommandeService {

  private resourceUrl = environment.apiUrl

  constructor(private httpClient: HttpClient) { }

  clientCommandes(clientId: number, page?: number, size?: number): Observable<any>{
    return this.httpClient.get(`${this.resourceUrl}/commandes/client/${clientId}?page=${page}&size=${size}`)
  }

  // clientCommandesRecentes(clientId: number): Observable<any>{
  //   return this.httpClient.get(`${this.resourceUrl}/commandes/commandes-recentes/client/${clientId}`)
  // }
}
