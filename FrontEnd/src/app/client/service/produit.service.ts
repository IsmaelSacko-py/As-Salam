import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment.development";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  resourceUrl = environment.apiUrl

  constructor(private httpClient: HttpClient) { }

  // creer un produit
  create(produit: any): Observable<any>{
    return this.httpClient.post<any>(`${this.resourceUrl}/produits`, produit)
  }
}
