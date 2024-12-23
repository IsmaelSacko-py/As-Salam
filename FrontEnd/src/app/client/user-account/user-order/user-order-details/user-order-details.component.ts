import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../../../service/auth.service";
import {ActivatedRoute} from "@angular/router";
import {CommandeService} from "../../../../service/commande.service";

@Component({
  selector: 'app-user-order-details',
  templateUrl: './user-order-details.component.html',
  styleUrl: './user-order-details.component.css'
})
export class UserOrderDetailsComponent implements OnInit{

  commande!: any
  adresseLivraison!: any
  user!: any

  constructor(private activeRoute: ActivatedRoute, private authService: AuthService, private commandeService: CommandeService) {
  }

  ngOnInit(): void {
    this.user = this.authService.getUser()
    this.activeRoute.params.subscribe((params: any) => {
      if(params.id){
        this.commandeService.getCommande(params.id).subscribe({
          next: response => {
            this.commande = response
            console.log(this.commande)
          },
          error: err => {
            console.log(err)
          }
        })
      }
    })


  }
}
