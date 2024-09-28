import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./client/home/home.component";
import {ProductDetailsComponent} from "./client/product-details/product-details.component";
import {UserAccountComponent} from "./client/user-account/user-account.component";
import {CartComponent} from "./client/cart/cart.component";
import {CheckoutComponent} from "./client/checkout/checkout.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'product-details', component: ProductDetailsComponent},
  {path: 'cart', component: CartComponent},
  {path: 'checkout', component: CheckoutComponent},
  {path: 'user-account', component: UserAccountComponent, loadChildren: () => import('./client/user-account/module-user-account.module').then(m => m.ModuleUserAccountModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
