import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../../service/auth.service";
import {Router} from "@angular/router";
import {CommandeService} from "../../../service/commande.service";

@Component({
  selector: 'app-user-order',
  templateUrl: './user-order.component.html',
  styleUrl: './user-order.component.css'
})
export class UserOrderComponent implements OnInit{
  commandesStatus =[
    {status: 'EN_COURS', message: 'en cours' , icon: 'badge badge-success'},
    {status: 'EN_COURS', message: 'en cours' , icon: 'badge badge-danger'},
    {status: 'EN_COURS', message: 'en cours' , icon: 'badge badge-primary'},
  ]

  user!: any
  isAnVendor!: boolean

  userCommandes!: any
  userCommandesLinks!: any
  page!: any

  constructor(private authService: AuthService, private route: Router, private commandeService: CommandeService) {
  }

  ngOnInit(): void {
    this.user = this.authService.getUser()
    this.userOrders(0, 10)
  }

  userOrders(page?: number, size?: number){
    const user = this.authService.getUser()
    const userId = user.id
    this.isAnVendor = user.profil.nom === 'vendeur'
    this.commandeService.userCommandes(userId, page, size).subscribe({
      next: response => {
        console.log(response)
        this.userCommandes = response._embedded.commandeList
        this.userCommandesLinks = response._links
        this.page = response.page
        console.log(this.page)
      },
      error: err => {
        console.log(err)
      }
    })
  }


  range(totalPages: number): number[] {
    return Array(totalPages).fill(0).map((_, index) => index);
  }
}
