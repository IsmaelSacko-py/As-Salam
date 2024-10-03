import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalQuickviewComponent } from './modal-quickview/modal-quickview.component';
import { ProductItemComponent } from './product-item/product-item.component';



@NgModule({
  declarations: [
    ModalQuickviewComponent,
    ProductItemComponent
  ],
  exports: [
    ModalQuickviewComponent,
    ProductItemComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
