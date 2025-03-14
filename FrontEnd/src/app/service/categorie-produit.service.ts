import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment.development";

@Injectable({
  providedIn: 'root'
})
export class CategorieProduitService {

  resourceUrl = environment.apiUrl
  constructor(private httpClient: HttpClient) { }


  getAll(): Observable<any>{
    return this.httpClient.get<any>(`${this.resourceUrl}/categorie`)
  }
}
