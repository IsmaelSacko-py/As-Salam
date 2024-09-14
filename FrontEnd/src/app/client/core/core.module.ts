import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './shell/header/header.component';
import { FooterComponent } from './shell/footer/footer.component';
import { PreloaderComponent } from './shell/preloader/preloader.component';
import {RouterLink} from "@angular/router";



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    PreloaderComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    PreloaderComponent
  ],
    imports: [
        CommonModule,
        RouterLink
    ]
})
export class CoreModule { }
