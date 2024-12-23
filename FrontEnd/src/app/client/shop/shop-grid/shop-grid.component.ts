import {Component, OnInit} from '@angular/core';
import {ProduitService} from "../../../service/produit.service";
import {Produit} from "../../../model/Produit.model";
import {UserService} from "../../../service/user.service";
import {AuthService} from "../../../service/auth.service";
import {CategorieProduitService} from "../../../service/categorie-produit.service";

@Component({
  selector: 'app-shop-grid',
  templateUrl: './shop-grid.component.html',
  styleUrl: './shop-grid.component.css'
})
export class ShopGridComponent implements OnInit{
  hideCategoryDropDown = 'hide-category'

  produits!: Produit[]
  productCategories!: any
  productsLinks!: any
  page!: any

  constructor(private produitService: ProduitService, private categorieProduitService: CategorieProduitService) {

  }

  ngOnInit(): void {
    this.getProducts()
    this.getAllCategorie()
    // console.log(this.clientService.getUser())
  }

  getProducts(){
    this.produitService.findAll(0, 9).subscribe({
      next: response => {
        this.produits = response._embedded.produitList
        this.productsLinks = response._links
        this.page = response.page
        console.log(response)
      },
      error: err => {
        console.log(err)
      }
    })
  }

  getAllCategorie(){
    this.categorieProduitService.getAll().subscribe({
      next: response => {
        this.productCategories = response._embedded.categorieDTOList
        console.log(this.productCategories)
      },
      error: err => {
        console.log(err)
      }
    })
  }

  products(page?: number, size?: number){
    // const user = this.authService.getUser()
    // const userId = user.id
    // this.isVendor = user.profil.nom === 'vendeur'
    this.produitService.findAll(page, size).subscribe({
      next: response => {
        console.log(response)
        this.produits = response._embedded.produitList
        this.productsLinks = response._links
        this.page = response.page
        console.log(this.page)
      },
      error: err => {
        console.log(err)
      }
    })
  }


  range(totalPages: number): number[] {
    return Array(totalPages).fill(0).map((_, index) => index);
  }

}
