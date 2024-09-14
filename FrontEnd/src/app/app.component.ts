import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'FrontEnd';
  hideCategoryDropDown!: string

  onActivate(composant: any){
    if(composant.hideCategoryDropDown){
      this.hideCategoryDropDown = composant.hideCategoryDropDown
    }
  }
}
