import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment.development";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RegionService {

  private resourceUrl = environment.apiUrl
  constructor(private httpClient: HttpClient) { }

  // recupere toutes le regions
  findAll(): Observable<any>{
    return this.httpClient.get<any>(`${this.resourceUrl}/regions`)
  }
}
