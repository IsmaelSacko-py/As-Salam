import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../../../service/auth.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-user-order-details',
  templateUrl: './user-order-details.component.html',
  styleUrl: './user-order-details.component.css'
})
export class UserOrderDetailsComponent implements OnInit{

  commande!: any
  adresseLivraison!: any
  user!: any

  constructor(private activeRoute: ActivatedRoute, private authService: AuthService) {
  }

  ngOnInit(): void {
    this.user = this.authService.getUser()
    this.activeRoute.params.subscribe((param) => {
      if(param['id']){
        this.commande = this.user.commandes.find((commande: any) => commande.id == param['id'])
        console.log(this.commande)
      }
    })


  }
}
