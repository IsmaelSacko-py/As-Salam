import {Component, Input, OnInit} from '@angular/core';
import {PanierService} from "../../../service/panier.service";
import {AuthService} from "../../../service/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrl: './cart-summary.component.css'
})
export class CartSummaryComponent implements OnInit{
  @Input() cart!: any
  totalMontant!: number
  @Input() isCartProcess = true

  constructor(private panierService: PanierService, private authService: AuthService, private router: Router) {
  }

  ngOnInit() {
    this.calculateTotal()
  }

  calculateTotal() {
    this.totalMontant = this.cart.detailsPanier.reduce((acc: any, details: any) => {
      return acc + details.montant;
    }, 0);
  }

  validatePanier(){
    const user = this.authService.getUser()
    this.panierService.validate(user).subscribe({
      next: response => {
        console.log(response)
        this.router.navigate(["/checkout-complete"])
      },
      error: err => {
        console.log(err)
      }
    })
  }
}
