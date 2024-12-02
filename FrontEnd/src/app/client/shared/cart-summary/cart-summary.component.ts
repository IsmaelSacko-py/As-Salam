import {Component, Input, OnInit} from '@angular/core';
import {PanierService} from "../../../service/panier.service";
import {AuthService} from "../../../service/auth.service";
import {Router} from "@angular/router";
import {PaiementService} from "../../../service/paiement.service";

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrl: './cart-summary.component.css'
})
export class CartSummaryComponent implements OnInit{
  @Input() cart!: any
  subTotal!: number
  reductionTotal!: number
  total!: number
  @Input() isCartProcess = true

  constructor(private panierService: PanierService, private paiementService: PaiementService, private authService: AuthService, private router: Router) {
  }

  ngOnInit() {
    this.calculateSubTotal()
    this.calculateTotalReduction()
    this.total = this.subTotal - this.reductionTotal
  }

  calculateSubTotal() {
    this.subTotal = this.cart.detailsPanier.reduce((acc: any, details: any) => {
      return acc + details.montant * details.quantite;
    }, 0);
  }

  validatePanier(){
    const user = this.authService.getUser()
    this.panierService.validate(user).subscribe({
      next: response => {
        console.log(response)
        this.effectuerPaiement(response)
      },
      error: err => {
        console.log(err)
      }
    })
  }

  calculateTotalReduction(){
      this.reductionTotal = this.cart.detailsPanier.reduce((total: any, item: any) =>{
        let totalProduit = item.montant * item.quantite
        total += totalProduit * item.produit.remise/100
          return total
      }, 0)
  }

  effectuerPaiement(commande: any){
    this.paiementService.effectuerPaiement(commande).subscribe({
      next: response => {
        console.log(response)
        window.location.href = response.redirect_url
      },
      error: err => {
        console.log(err)
      }
    })
  }


}
