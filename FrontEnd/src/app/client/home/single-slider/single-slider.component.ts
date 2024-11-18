import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-single-slider',
  templateUrl: './single-slider.component.html',
  styleUrl: './single-slider.component.css'
})
export class SingleSliderComponent {
  @Input() slider!: any
}
