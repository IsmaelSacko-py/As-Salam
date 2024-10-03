import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopModuleRoutingModule } from './shop-module-routing.module';
import { ShopGridComponent } from './shop-grid/shop-grid.component';
import { ShopListComponent } from './shop-list/shop-list.component';
import {SharedModule} from "../shared/shared.module";


@NgModule({
  declarations: [
    ShopGridComponent,
    ShopListComponent
  ],
    imports: [
        CommonModule,
        ShopModuleRoutingModule,
        SharedModule
    ]
})
export class ShopModuleModule { }
