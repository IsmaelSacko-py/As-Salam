import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment.development";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  resourceUrl = environment.apiUrl
  user!: any

  constructor(private httpClient: HttpClient) { }

  findOne(id: number): Observable<any>{
    return this.httpClient.get<any>(`${this.resourceUrl}/utilisateurs/${id}`)
  }

  // setUser(user: any){
  //   this.user = user
  // }
  // getUser(){
  //   return this.user
  // }


  vendorDashboardStats(vendorId: number): Observable<any>{
    return this.httpClient.get(`${this.resourceUrl}/vendeurs/stats/${vendorId}`)
  }

  countProductSalesInCurrentMonth(vendorId: number): Observable<any>{
    return this.httpClient.get(`${this.resourceUrl}/vendeurs/current-month-sales/${vendorId}`)
  }

}
