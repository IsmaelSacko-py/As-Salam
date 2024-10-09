import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalQuickviewComponent } from './modal-quickview/modal-quickview.component';
import { ProductItemComponent } from './product-item/product-item.component';
import {FormsModule} from "@angular/forms";
import { CartSummaryComponent } from './cart-summary/cart-summary.component';



@NgModule({
  declarations: [
    ModalQuickviewComponent,
    ProductItemComponent,
    CartSummaryComponent
  ],
    exports: [
        ModalQuickviewComponent,
        ProductItemComponent,
        CartSummaryComponent
    ],
    imports: [
        CommonModule,
        FormsModule
    ]
})
export class SharedModule { }
