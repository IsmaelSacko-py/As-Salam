import {Component, OnInit} from '@angular/core';
import {UserService} from "./service/user.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'FrontEnd';
  hideCategoryDropDown!: string
  hideHeader = false
  hideFooter = false

  constructor(private clientService: UserService) {
  }


  onActivate(composant: any){
    if(composant.hideCategoryDropDown){
      this.hideCategoryDropDown = composant.hideCategoryDropDown
    }

    if(composant.hideHeader){
      this.hideHeader = composant.hideHeader
    }

    if(composant.hideFooter){
      this.hideFooter = composant.hideFooter
    }
  }


}
