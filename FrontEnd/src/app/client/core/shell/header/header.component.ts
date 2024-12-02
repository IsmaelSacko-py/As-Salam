import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {UserService} from "../../../../service/user.service";
import {AuthService} from "../../../../service/auth.service";
import {CommunicationService} from "../../../../service/communication.service";
import { Subscription } from 'rxjs';
import {CategorieProduitService} from "../../../../service/categorie-produit.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit, OnDestroy{
  @Input() hideCategoryDropDown = ''
  @Input() hideHeader = false
  user!: any

  productCategories!: any

  private actionSubscription!: Subscription

  icons = [
    // { icon: 'app/client/assets/img/icon/shopping-bag.svg', label: 'New Arrivals' },
    // { icon: 'app/client/assets/img/icon/dress.svg', label: 'Accessories' },
    { icon: 'app/client/assets/img/icon/laptop.svg', label: 'Electronics' },
    { icon: 'app/client/assets/img/icon/grocery.svg', label: 'Grocery & Market' },
    { icon: 'app/client/assets/img/icon/music.svg', label: 'Music & Audio' },
    { icon: 'app/client/assets/img/icon/furniture.svg', label: 'Home & Furniture' },
    { icon: 'app/client/assets/img/icon/toy.svg', label: 'Toy & Video Games' },
    { icon: 'app/client/assets/img/icon/gifts.svg', label: 'Gifts' },
    { icon: 'app/client/assets/img/icon/mother.svg', label: 'Babies & Moms' },
    { icon: 'app/client/assets/img/icon/beauty.svg', label: 'Health & Beauty' },
    { icon: 'app/client/assets/img/icon/sports.svg', label: 'Sports & Outdoor' },
    { icon: 'app/client/assets/img/icon/garden.svg', label: 'Home & Garden' },
    { icon: 'app/client/assets/img/icon/automotive.svg', label: 'Automotive' }
  ];

  constructor(private comService: CommunicationService, private authService: AuthService, private categorieService: CategorieProduitService) {
  }

  ngOnInit(): void {
    this.findUser()
    this.actionSubscription = this.comService.action$.subscribe(() => {
      this.reactToAction();
    })
    this.getAllCategorie()
  }

  ngOnDestroy() {
    // Se désabonner lorsque le composant est détruit pour éviter les fuites de mémoire
    if (this.actionSubscription) {
      this.actionSubscription.unsubscribe();
    }
  }

  findUser(){
    this.user = this.authService.getUser()
    console.log(this.user)
  }

  reactToAction() {
    this.findUser()
  }

  getAllCategorie(){
    this.categorieService.getAll().subscribe({
      next: response => {
        this.productCategories = response._embedded.categorieDTOList
      },
      error: err => {
        console.log(err)
      }
    })
  }

  calculateTotalPanier(detailsPanier: any){
    const totalBrut = detailsPanier.reduce((total: any, item: any) => {
      return total + (item.produit.prix * item.quantite);
    }, 0);

    const remise = detailsPanier.reduce((total: any, item: any) =>{
      let totalProduit = item.montant * item.quantite
      total += totalProduit * item.produit.remise/100
      return total
    }, 0)

    return totalBrut - remise
  }

}
