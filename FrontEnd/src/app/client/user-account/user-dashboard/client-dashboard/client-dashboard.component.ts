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

  constructor(private commandeService: CommandeService, private authService: AuthService, private route: Router) {
  }

  ngOnInit() {
    this.getCommandesRecentes(0, 7)
  }

  getCommandesRecentes(page?: number, size?: number){
    const clientId = this.authService.getUser().id
    this.commandeService.clientCommandes(clientId, page, size).subscribe({
      next: response => {
        this.clientCommandes = response._embedded.commandeList

        // Compter les commandes "En cours"
        this.commandesEnCours = this.clientCommandes.filter((commande: any) => commande.statut === "En cours").length;

        // Compter les commandes "Livrée"
        this.commandesLivrees = this.clientCommandes.filter((commande: any) => commande.statut === "Livrée").length;

      },
      error: err => {
        console.log(err)
      }
    })
  }

  detailCommnade(id: number){
    this.route.navigate(['/user-account/user-order-details', id]);
  }
}
