import {Component, OnInit} from '@angular/core';
import {CommandeService} from "../../../service/commande.service";
import {AuthService} from "../../../service/auth.service";
import {resolve} from "@angular/compiler-cli";

@Component({
  selector: 'app-user-track-order',
  templateUrl: './user-track-order.component.html',
  styleUrl: './user-track-order.component.css'
})
export class UserTrackOrderComponent implements OnInit{

  user!: any
  commande: any = []
  commandes: any = []
  commandeStatuts: any = {
    'En attente': 0,
    'En cours': 1,
    'Expédiée': 2,
    'Livrée': 3,
    'Annulée': 4,
  }

  cities = [
    {id: 1, name: 'Vilnius'},
    {id: 2, name: 'Kaunas'},
    {id: 3, name: 'Pavilnys', disabled: true},
    {id: 4, name: 'Pabradė'},
    {id: 5, name: 'Klaipėda'}
  ];

  selectedCity!: any

  constructor(private commandeService: CommandeService, private authService: AuthService) {}

  ngOnInit() {
    this.getCommande()
    this.getAllCommandes()
  }


  getCommande(){
    this.commandeService.getCommande(90).subscribe({
      next: response => {
        console.log(response)
        this.commande = response
      },
      error: err => {
        console.log(err)
      }
    })
  }

  getAllCommandes(){
    const userId = this.authService.getUser().id
    this.commandeService.userCommandes(userId).subscribe({
      next: response => {
        console.log(response)
        this.commandes = response._embedded.commandeList
      },
      error: err => {
        console.log(err)
      }
    })
  }

  isCompleted(commandeStatut: any){
    const statut1 = this.commandeStatuts[commandeStatut]
    const statut2 = this.commandeStatuts[this.commande.statut]
    return statut2 >= statut1 ? 'completed' : ''
  }
}
