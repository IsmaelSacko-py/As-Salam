import {Component, OnInit} from '@angular/core';
import {ProduitService} from "../../../service/produit.service";
import {Produit} from "../../../model/Produit.model";
import {ClientService} from "../../../service/client.service";

@Component({
  selector: 'app-shop-grid',
  templateUrl: './shop-grid.component.html',
  styleUrl: './shop-grid.component.css'
})
export class ShopGridComponent implements OnInit{
  hideCategoryDropDown = 'hide-category'

  produits!: Produit[]

  constructor(private produitService: ProduitService, private clientService: ClientService) {

  }

  ngOnInit(): void {
    this.getProducts()
    console.log(this.clientService.getUser())
  }

  getProducts(){
    this.produitService.findAll().subscribe({
      next: response => {
        this.produits = response._embedded.produitDTOList
        console.log(response)
      },
      error: err => {
        console.log(err)
      }
    })
  }

}
