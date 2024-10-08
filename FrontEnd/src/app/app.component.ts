import {Component, OnInit} from '@angular/core';
import {ClientService} from "./service/client.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'FrontEnd';
  hideCategoryDropDown!: string
  hideHeader!: boolean

  constructor(private clientService: ClientService) {
  }

  ngOnInit() {
  }

  onActivate(composant: any){
    if(composant.hideCategoryDropDown){
      this.hideCategoryDropDown = composant.hideCategoryDropDown
    }

    if(composant.hideHeader){
      this.hideHeader = composant.hideHeader
    }
  }


}
