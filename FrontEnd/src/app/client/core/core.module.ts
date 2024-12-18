import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './shell/header/header.component';
import { FooterComponent } from './shell/footer/footer.component';
import { PreloaderComponent } from './shell/preloader/preloader.component';
import {RouterLink} from "@angular/router";
import { ChatbotComponent } from './shell/chatbot/chatbot.component';
import { PrefooterComponent } from './shell/prefooter/prefooter.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    PreloaderComponent,
    ChatbotComponent,
    PrefooterComponent
  ],
    exports: [
        HeaderComponent,
        FooterComponent,
        PreloaderComponent,
        ChatbotComponent,
        PrefooterComponent
    ],
  imports: [
    CommonModule,
    RouterLink,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CoreModule { }
