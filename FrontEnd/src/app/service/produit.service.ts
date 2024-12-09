import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment.development";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Produit} from "../model/Produit.model";

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  private resourceUrl = environment.apiUrl

  constructor(private httpClient: HttpClient) { }

  // creer un produit
  create(produit: Produit): Observable<Produit>{
    console.log(`${this.resourceUrl}/produits`)
    return this.httpClient.post<Produit>(`${this.resourceUrl}/produits`, produit)
  }

  //recupere tous les produits
  findAll(): Observable<any>{
    return this.httpClient.get<any>(`${this.resourceUrl}/produits`)
  }

  userProducts(user: any): Observable<any>{
    return this.httpClient.get<any>(`${this.resourceUrl}/produits/${user.profil.nom}-produit/${user.id}`)
  }

  vendeurProduitsVendus(vendeurId: number): Observable<any>{
    return this.httpClient.get<any>(`${this.resourceUrl}/produits/vendeur-produit-vendu/${vendeurId}`)
  }
}
