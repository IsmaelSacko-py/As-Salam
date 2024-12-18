import {Component, OnInit} from '@angular/core';
import {CoreModule} from "../core/core.module";
import {CategorieProduitService} from "../../service/categorie-produit.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  hideCategoryDropDown = ''

  productCategories!: any

  sliders = [
    {
      title: 'Pour Vos Premiers Achats Chez<br /><span>AsSalam</span>',
      subTitle: 'Jusqu\'à 50% de réduction',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
      image: 'app/client/assets/img/product/p15.png'
    },
    {
      title: 'Pour Vos Premiers Achats Chez<br /><span>AsSalam</span>',
      subTitle: 'Jusqu\'à 50% de réduction',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
      image: 'app/client/assets/img/slider/hero-2.png'
    },
    {
      title: 'Pour Vos Premiers Achats Chez<br /><span>AsSalam</span>',
      subTitle: 'Jusqu\'à 50% de réduction',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
      image: 'app/client/assets/img/slider/hero-3.png'
    },
    {
      title: 'Pour Vos Premiers Achats Chez<br /><span>AsSalam</span>',
      subTitle: 'Jusqu\'à 50% de réduction',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
      image: 'app/client/assets/img/slider/hero-4.png'
    },
  ]

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

  constructor(private categorieProduitService: CategorieProduitService) {
  }

  ngOnInit() {
    this.getAllCategorie()
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
