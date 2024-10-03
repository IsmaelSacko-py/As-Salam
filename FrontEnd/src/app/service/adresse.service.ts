import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment.development";
import {HttpClient} from "@angular/common/http";
import {Produit} from "../model/Produit.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AdresseService {

  private resourceUrl = environment.apiUrl

  constructor(private httpClient: HttpClient) { }

  // creer un produit
  create(adresse: any): Observable<any>{
    console.log(`${this.resourceUrl}/adresses`)
    return this.httpClient.post<any>(`${this.resourceUrl}/adresses`, adresse)
  }
}
