import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../service/auth.service";
import {CategoriePaiementService} from "../../service/categorie-paiement.service";
import {ModePaiementService} from "../../service/mode-paiement.service";

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent implements OnInit{
  hideCategoryDropDown = 'hide-category'
  user!: any
  userHomeAddress!: any
  userShippingAddress!: any
  modesPaiement!: any
  singlePaiement!: any

  constructor(private authService: AuthService, private modePaiementService: ModePaiementService) {
  }

  ngOnInit(): void {
    this.user = this.authService.getUser()
    this.getUserAddress()
    this.findAllCategoriePaiement()
  }

  getUserAddress(){
    console.log(this.user)
    this.userHomeAddress = this.user.adresses.find((adresse: any) => adresse.type === "DOMICILE")
    this.userShippingAddress = this.user.adresses.find((adresse: any) => adresse.type === "LIVRAISON")

  }

  findAllCategoriePaiement(){
    this.modePaiementService.findAll().subscribe({
      next: response => {
        this.modesPaiement = response._embedded.modePaiementList
        console.log(this.modesPaiement)
      },
      error: err => {
        console.log(err)
      }
    })
  }


}
