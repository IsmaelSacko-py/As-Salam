import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment.development";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  resourceUrl = environment.apiUrl
  constructor(private httpClient: HttpClient) { }

  register(user: any): Observable<any>{
    return this.httpClient.post<any>(`${this.resourceUrl}/auth/register`, user)
  }

  login(credentials: any): Observable<any>{
    return this.httpClient.post<any>(`${this.resourceUrl}/auth/login`, credentials)
  }

  logout(){

  }
}
