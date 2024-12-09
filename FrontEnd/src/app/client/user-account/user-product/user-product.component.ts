import { Component } from '@angular/core';
import {ProduitService} from "../../../service/produit.service";
import {AuthComponent} from "../../../auth/auth.component";
import {AuthService} from "../../../service/auth.service";

@Component({
  selector: 'app-user-product',
  templateUrl: './user-product.component.html',
  styleUrl: './user-product.component.css'
})
export class UserProductComponent {
  user!: any
  products!: any
  // Les produits vendus par un vendeur
  produitsVendus!: any




  constructor(private productService: ProduitService, private authService: AuthService) {
    this.userProducts()
    this.vendeurProduitsVendus()
  }

  userProducts(){
    this.user = this.authService.getUser()
    this.productService.userProducts(this.user).subscribe({
      next: response => {
        this.products = response._embedded.produitList
      },
      error: err => {
        console.log(err)
      }
    })
  }

  countVentes(produitId: number){
    return this.produitsVendus.filter((product: any) => product.id === produitId).length
  }

  vendeurProduitsVendus(){
    this.productService.vendeurProduitsVendus(this.user.id).subscribe({
      next: response => {
        this.produitsVendus = response._embedded.produitList
      },
      error: err => {
        console.log(err)
      }
    })
  }

  getBadgeClass(statut: string): string {
    const badgeClasses: any = {
      'En attente': 'badge-info',
      'Actif': 'badge-success',
      'Bloqué': 'badge-danger'
    };

    return badgeClasses[statut] || ''; // Retourne une classe ou vide si le statut n'est pas trouvé
  }
}
