import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment.development";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PaiementService {

  private resourceUrl = environment.apiUrl
  constructor(private httpClient: HttpClient) { }

  effectuerPaiement(commande: any): Observable<any>{
    return this.httpClient.post(`${this.resourceUrl}/paiement/demande-paiement`, commande)
  }
}
