import {Component} from '@angular/core';
import {CoreModule} from "../core/core.module";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  hideCategoryDropDown = ''

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
}
