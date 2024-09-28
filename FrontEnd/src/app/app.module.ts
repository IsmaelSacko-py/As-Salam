import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './client/home/home.component';
import { ProductDetailsComponent } from './client/product-details/product-details.component';
import {CoreModule} from "./client/core/core.module";
import {SharedModule} from "./client/shared/shared.module";
import { CartComponent } from './client/cart/cart.component';
import { CheckoutComponent } from './client/checkout/checkout.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductDetailsComponent,
    CartComponent,
    CheckoutComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        CoreModule,
        SharedModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
