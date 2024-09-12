import {Component} from '@angular/core';
import {CoreModule} from "../core/core.module";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  hideCategory = ''
}
