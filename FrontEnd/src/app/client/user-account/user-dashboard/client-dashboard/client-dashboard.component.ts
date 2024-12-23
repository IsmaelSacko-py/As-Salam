import {Component, OnInit} from '@angular/core';
import {CommandeService} from "../../../../service/commande.service";
import {AuthService} from "../../../../service/auth.service";
import {Router} from "@angular/router";
import {filter} from "rxjs";
import {UserService} from "../../../../service/user.service";

@Component({
  selector: 'app-client-dashboard',
  templateUrl: './client-dashboard.component.html',
  styleUrl: './client-dashboard.component.css'
})
export class ClientDashboardComponent implements OnInit{
  sideBarType = 'client'

  clientCommandes!: any
  commandesEnAttente!: number
  commandesLivrees!: number
  vendorSalesInCurrentMonth!: number
  isVendor!: boolean
  user!: any

  constructor(private commandeService: CommandeService, private authService: AuthService, private userService: UserService) {
  }

  ngOnInit() {
    this.user = this.authService.getUser()
    this.getCommandesRecentes(0, 7)
    this.isVendor = this.user.profil.nom === 'vendeur'
    this.countProductSalesInCurrentMonth()
  }

  getCommandesRecentes(page?: number, size?: number){
    const userId = this.user.id
    this.commandeService.userCommandes(userId, page, size).subscribe({
      next: response => {
        this.clientCommandes = response._embedded?.commandeList

        // Compter les commandes "En cours"
        this.commandesEnAttente = this.clientCommandes.filter((commande: any) => commande.statut === "En attente").length;
        console.log(this.commandesEnAttente)
        // Compter les commandes "Livrée"
        this.commandesLivrees = this.clientCommandes.filter((commande: any) => commande.statut === "Livrée").length;
      },
      error: err => {
        console.log(err)
      }
    })
  }

  countProductSalesInCurrentMonth(){
    const vendeurId = this.user.id
    this.userService.countProductSalesInCurrentMonth(vendeurId).subscribe({
      next: response => {
        console.log(response)
        this.vendorSalesInCurrentMonth = response
      },
      error: err => {
        console.log(err)
      }
    })
  }

}
