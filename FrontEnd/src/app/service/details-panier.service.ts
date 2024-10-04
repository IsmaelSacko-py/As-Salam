import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment.development";
import {HttpClient} from "@angular/common/http";
import {DetailPanier} from "../model/DetailPanier.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DetailsPanierService {

  resourceUrl = environment.apiUrl
  constructor(private httpClient: HttpClient) { }

  create(detailsPanier: DetailPanier): Observable<DetailPanier>{
    return this.httpClient.post<DetailPanier>(`${this.resourceUrl}/detailspanier`, detailsPanier)
  }

  update(detailsPanier: DetailPanier): Observable<DetailPanier>{
    console.log(detailsPanier)
    return this.httpClient.put<DetailPanier>(`${this.resourceUrl}/detailspanier/update`, detailsPanier)
  }

  delete(id?: number): Observable<any>{
    return this.httpClient.delete(`${this.resourceUrl}/detailspanier/${id}`)
  }
}
