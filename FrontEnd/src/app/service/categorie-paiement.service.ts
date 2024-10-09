import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment.development";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CategoriePaiementService {
  resourceUrl = environment.apiUrl
  constructor(private httpClient: HttpClient) { }

  findAll(): Observable<any>{
    return this.httpClient.get<any>(`${this.resourceUrl}/categoriepaiements`)
  }
}
