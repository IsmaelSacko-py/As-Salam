import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment.development";
import {Observable} from "rxjs";
import {DetailPanier} from "../model/DetailPanier.model";

@Injectable({
  providedIn: 'root'
})
export class PanierService {

  resourceUrl = environment.apiUrl
  constructor(private httpClient: HttpClient) { }

  createCartItem(detailsPanier: DetailPanier): Observable<DetailPanier>{
    return this.httpClient.post<DetailPanier>(`${this.resourceUrl}/paniers/cartItem`, detailsPanier)
  }
}
