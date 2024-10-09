import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./client/home/home.component";
import {ProductDetailsComponent} from "./client/product-details/product-details.component";
import {UserAccountComponent} from "./client/user-account/user-account.component";
import {CartComponent} from "./client/cart/cart.component";
import {CheckoutComponent} from "./client/checkout/checkout.component";
import {ShopGridComponent} from "./client/shop/shop-grid/shop-grid.component";
import {LoginComponent} from "./auth/login/login.component";
import {RegistrationComponent} from "./auth/registration/registration.component";
import {CheckoutCompletComponent} from "./client/checkout/checkout-complet/checkout-complet.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'product-details', component: ProductDetailsComponent},
  {path: 'cart', component: CartComponent},
  {path: 'checkout', component: CheckoutComponent},
  {path: 'checkout-complete', component: CheckoutCompletComponent},
  {path: 'user-account', component: UserAccountComponent, loadChildren: () => import('./client/user-account/module-user-account.module').then(m => m.ModuleUserAccountModule)},
  {path: 'shop', component: ShopGridComponent, loadChildren: () => import('./client/shop/shop-module.module').then(m => m.ShopModuleModule)},
  {path: "auth", loadChildren: () => import("./auth/auth-module.module").then(m => m.AuthModuleModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
