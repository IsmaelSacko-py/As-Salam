import {Component, Input, OnInit} from '@angular/core';
import {Produit} from "../../../model/Produit.model";
import Swal from "sweetalert2";
import {DetailPanier} from "../../../model/DetailPanier.model";
import {PanierService} from "../../../service/panier.service";
import {DetailsPanierService} from "../../../service/details-panier.service";
import {Router} from "@angular/router";
@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css'
})
export class ProductItemComponent implements OnInit{
  @Input() produit!: Produit
  detailsPanier!: DetailPanier
  quantity = 1
  isCreated!: boolean

  constructor(private detailsPanierService: DetailsPanierService, private router: Router) {
  }

  ngOnInit(): void {
    // this.produit.detailsPanier[0].quantite = 1
    // this.isCreated = false
  }

  increment(): void {
    this.produit.detailsPanier[0].quantite++;
    this.updateDetailsPanier(this.produit.detailsPanier[0])
  }

  decrement(): void {
    const details = this.produit.detailsPanier[0]
    if (details.quantite > 0) {
      details.quantite--;
      this.updateDetailsPanier(this.produit.detailsPanier[0])
      if(details.quantite <= 0){
        this.deleteDetailsPanier(details.id)
      }
    }
  }

  addToCart(produit: Produit){
    console.log(produit)
    const details: DetailPanier = {
      quantite: 1,
      montant: produit.prix, // Montant total ou calculé
      produit: produit, // Référence au produit
      panier: null // Votre logique pour obtenir le panier
    }
    // this.detailsPanier.produit = produit
    console.log(details)
    this.detailsPanierService.create(details).subscribe({
      next: response => {
        this.produit.detailsPanier.push(response)
        // this.isCreated = true
        console.log(response)
        console.log(this.produit)
      },
      error: err => {
        console.log(err)
      }
    })
  }

  updateDetailsPanier(details: DetailPanier){
    this.detailsPanierService.update(details).subscribe({
      next: response => {
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
        console.log(response)
      },
      error: err => {
        console.log(err)
      }
    })
  }

  addToWishlist(){
    alert("add to wishlist")
  }



}
