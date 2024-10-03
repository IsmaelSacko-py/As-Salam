import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ShopGridComponent} from "./shop-grid/shop-grid.component";
import {ShopListComponent} from "./shop-list/shop-list.component";

const routes: Routes = [
  {path: '', component: ShopListComponent},
  {path: 'list', component: ShopListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopModuleRoutingModule { }
