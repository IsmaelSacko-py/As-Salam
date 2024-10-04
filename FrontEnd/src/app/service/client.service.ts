import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment.development";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  resourceUrl = environment.apiUrl
  user!: any

  constructor(private httpClient: HttpClient) { }

  findOne(id: number): Observable<any>{
    return this.httpClient.get<any>(`${this.resourceUrl}/client/${id}`)
  }

  setUser(user: any){
    this.user = user
  }
  getUser(){
    return this.user
  }
}
