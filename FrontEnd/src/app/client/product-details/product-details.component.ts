import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProduitService} from "../../service/produit.service";
import {DetailPanier} from "../../model/DetailPanier.model";
import {AuthService} from "../../service/auth.service";
import {CommunicationService} from "../../service/communication.service";
import {UserService} from "../../service/user.service";
import {DetailsPanierService} from "../../service/details-panier.service";
import {Produit} from "../../model/Produit.model";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit{
  hideCategoryDropDown = 'hide-category'

  produit!: any
  user!: any
  quantity: number = 1

  constructor(private activatedRoute: ActivatedRoute, private produitService: ProduitService, private authService: AuthService, private comService: CommunicationService, private userService: UserService, private detailsPanierService: DetailsPanierService) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: any) => {
      if(params.id){
        this.getProduit(params.id)
      }
    })
    this.user = this.authService.getUser()
  }


  getProduit(produitId: number){
    this.produitService.findOne(produitId).subscribe({
      next: response => {
        console.log(response)
        this.produit = response
      },
      error: err => {
        console.log(err)
      }
    })
  }

  addToCart(produit: Produit){
    console.log(this.quantity)
    const details: DetailPanier = {
      quantite: this.quantity,
      montant: produit.prix, // Montant total ou calculé
      produit: produit, // Référence au produit
      panier: this.user.panier // Votre logique pour obtenir le panier
    }
    // this.detailsPanier.produit = produit
    console.log(details)
    this.detailsPanierService.create(details).subscribe({
      next: response => {
        this.produit.detailsPanier.push(response)
        this.user.panier.detailsPanier.push(response)
        this.findUser()
      },
      error: err => {
        console.log(err)
      }
    })
  }

  increment(): void {
    this.quantity += 1;  // Augmenter la quantité de 1
  }

  decrement(): void {
    if (this.quantity > 1) {
      this.quantity -= 1;  // Réduire la quantité de 1 (minimum 1)
    }
  }

  updateDetailsPanier(details: DetailPanier){
    this.detailsPanierService.update(details).subscribe({
      next: response => {
        this.produit.detailsPanier[0] = response
        this.findUser() // actualiser les donnees de l'utilisateur
        console.log(response)
      },
      error: err => {
        console.log(err)
      }
    })
  }

  findUser(){
    this.userService.findOne(this.user.id).subscribe({
      next: response => {
        this.user = response
        this.authService.setUser(this.user)
        this.comService.triggerAction() // mettre les infos de l'utilisateurs à jour pour l'affichage du panier
        console.log("user dans p-item", this.user)
        // console.log(this.authService.getUser())
      },
      error: err => {
        console.log(err)
      }
    })
  }

  deleteDetailsPanier(id?: number){
    this.detailsPanierService.delete(id).subscribe({
      next: response => {
        this.produit.detailsPanier = []
        this.user = this.authService.getUser()
      },
      error: err => {
        console.log(err)
      }
    })
  }




}
