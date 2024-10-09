import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../service/auth.service";
import {DetailPanier} from "../../model/DetailPanier.model";
import {DetailsPanierService} from "../../service/details-panier.service";
import {UserService} from "../../service/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit{
  hideCategoryDropDown = 'hide-category'
  detailsPanier!: any

  user!: any

  constructor(private router: Router, private authService: AuthService, private userService: UserService, private detailsPanierService: DetailsPanierService) {
  }
  ngOnInit(): void {
    this.user = this.authService.getUser()
  }


  increment(detailsPanier: any): void {
    detailsPanier.quantite++
    console.log(detailsPanier)
    this.updateDetailsPanier(detailsPanier)
  }

  decrement(detailsPanier: any): void {
    // detailsPanier.quantite--
    console.log(detailsPanier)
    // Permet de supprimer le produit dans la table detailsPanier lorsque sa quantité est égale à zéro
    const saveQuantite = detailsPanier.quantite
    if (detailsPanier.quantite > 0) {
      detailsPanier.quantite--;
      this.updateDetailsPanier(detailsPanier)
      if(saveQuantite == 1){
        this.deleteDetailsPanier(detailsPanier.id)
      }
    }

  }

  updateDetailsPanier(details: any){
    console.log(details)
    this.detailsPanierService.update(details).subscribe({
      next: response => {
        this.findUser()
        this.router.navigate(['/cart']).then(result => {
          if(result){
            this.user = this.authService.getUser()
            console.log(this.user)
          }
        })
      },
      error: err => {
        console.log(err)
      }
    })
  }

  deleteDetailsPanier(id?: number){
    this.detailsPanierService.delete(id).subscribe({
      next: response => {
        this.findUser()
        console.log(response)
      },
      error: err => {
        console.log(err)
      }
    })
  }

  findUser(){
    const userId = this.authService.getUser().id
    console.log(this.authService.getUser())
    this.userService.findOne(userId).subscribe({
      next: response => {
        console.log(response)
        this.authService.setUser(response)
      },
      error: err => {
        console.log(err)
      }
    })
  }


}
