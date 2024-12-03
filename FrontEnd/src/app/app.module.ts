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
import {HTTP_INTERCEPTORS, provideHttpClient} from "@angular/common/http";
import { ShopComponent } from './client/shop/shop.component';
import { AuthComponent } from './auth/auth.component';
import {FormsModule} from "@angular/forms";
import { CheckoutCompletComponent } from './client/checkout/checkout-complet/checkout-complet.component';
import { SingleSliderComponent } from './client/home/single-slider/single-slider.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductDetailsComponent,
    CartComponent,
    CheckoutComponent,
    ShopComponent,
    AuthComponent,
    CheckoutCompletComponent,
    SingleSliderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    FormsModule
  ],
  providers: [
    provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
