import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UserProfileComponent} from "../user-profile/user-profile.component";

const routes: Routes = [
  {path: '', component: UserProfileComponent},
  {path: 'user-dashboard', component: UserProfileComponent},
  {path: 'user-profile', component: UserProfileComponent},
  {path: 'user-message', component: UserProfileComponent},
  {path: 'user-address', component: UserProfileComponent},
  {path: 'user-notification', component: UserProfileComponent},
  {path: 'user-order', component: UserProfileComponent},
  {path: 'user-payment-method', component: UserProfileComponent},
  {path: 'user-payout', component: UserProfileComponent},
  {path: 'user-product', component: UserProfileComponent},
  {path: 'user-setting', component: UserProfileComponent},
  {path: 'user-support-ticket', component: UserProfileComponent},
  {path: 'user-track-order', component: UserProfileComponent},
  {path: 'user-transaction', component: UserProfileComponent},
  {path: 'user-wishlist', component: UserProfileComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModuleUserAccountRoutingModule { }
