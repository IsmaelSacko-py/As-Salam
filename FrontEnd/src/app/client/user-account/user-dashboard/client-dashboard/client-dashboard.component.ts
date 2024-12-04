import {Component, OnInit} from '@angular/core';
import {CommandeService} from "../../../../service/commande.service";
import {AuthService} from "../../../../service/auth.service";
import {Router} from "@angular/router";
import {filter} from "rxjs";

@Component({
  selector: 'app-client-dashboard',
  templateUrl: './client-dashboard.component.html',
  styleUrl: './client-dashboard.component.css'
})
export class ClientDashboardComponent implements OnInit{
  sideBarType = 'client'

  clientCommandes!: any
  commandesEnCours!: number
  commandesLivrees!: number
  isVendor!: boolean
  user!: any

  constructor(private commandeService: CommandeService, private authService: AuthService, private route: Router) {
  }

  ngOnInit() {
    this.user = this.authService.getUser()
    this.getCommandesRecentes(0, 7)
    this.isVendor = this.user.profil.nom === 'vendeur'
  }

  getCommandesRecentes(page?: number, size?: number){
    const userId = this.user.id
    this.commandeService.userCommandes(userId, page, size).subscribe({
      next: response => {
        this.clientCommandes = response._embedded.commandeList

        // Compter les commandes "En cours"
        this.commandesEnCours = this.clientCommandes.filter((commande: any) => commande.statut === "En attente").length;

        // Compter les commandes "Livrée"
        this.commandesLivrees = this.clientCommandes.filter((commande: any) => commande.statut === "Livrée").length;

      },
      error: err => {
        console.log(err)
      }
    })
  }

}
