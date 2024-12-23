import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Produit} from "../../../model/Produit.model";
import Swal from "sweetalert2";
import {DetailPanier} from "../../../model/DetailPanier.model";
import {PanierService} from "../../../service/panier.service";
import {DetailsPanierService} from "../../../service/details-panier.service";
import {Event, Router} from "@angular/router";
import {AuthService} from "../../../service/auth.service";
import {UserService} from "../../../service/user.service";
import {CommunicationService} from "../../../service/communication.service";
@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css'
})
export class ProductItemComponent implements OnInit{
  @Input() produit!: Produit
  @Output() produitEvent = new EventEmitter<any>()
  detailsPanier!: DetailPanier
  quantity = 1
  isCreated!: boolean
  user!: any

  constructor(private comService: CommunicationService, private detailsPanierService: DetailsPanierService, private router: Router, private authService: AuthService, private userService: UserService) {
  }

  ngOnInit(): void {
    this.user = this.authService.getUser()
  }

  increment(produit: any): void {
    const detailsPanier = this.user.panier.detailsPanier.find((detail: any) => detail.produit.id === produit.id)
    detailsPanier.quantite ++
    this.updateDetailsPanier(detailsPanier)
  }

  decrement(produit: any): void {
    const detailsPanier = this.user?.panier.detailsPanier.find((detail: any) => detail.produit.id === produit.id)
    if (detailsPanier.quantite > 0) {
      detailsPanier.quantite--;
      this.updateDetailsPanier(detailsPanier)
      // this.user = this.authService.getUser()
      // console.log(this.user)
      if(detailsPanier.quantite <= 0){
        this.deleteDetailsPanier(detailsPanier.id)
      }
    }
  }

  addToCart(produit: Produit){
    console.log(produit)
    const details: DetailPanier = {
      quantite: 1,
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

  deleteDetailsPanier(id?: number){
    this.detailsPanierService.delete(id).subscribe({
      next: response => {
        this.user.panier.detailsPanier = []
        this.user = this.authService.getUser()
      },
      error: err => {
        console.log(err)
      }
    })
  }

  addToWishlist(){
    alert("add to wishlist")
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


  goToProduitDetails(produitId: number){
    window.location.href = `/product-details/${produitId}`
  }


  inPanier(produit: any){
    const detailsPanier = this.user.panier.detailsPanier
    return detailsPanier.find((detail: any) => detail.produit.id === produit.id)
  }
}
