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

  constructor(private produitService: ProduitService, private categorieProduitService: CategorieProduitService) {

  }

  ngOnInit(): void {
    this.getProducts()
    this.getAllCategorie()
    // console.log(this.clientService.getUser())
  }

  getProducts(){
    this.produitService.findAll().subscribe({
      next: response => {
        this.produits = response._embedded.produitList
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

}
