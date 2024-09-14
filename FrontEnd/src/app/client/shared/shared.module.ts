import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalQuickviewComponent } from './modal-quickview/modal-quickview.component';



@NgModule({
  declarations: [
    ModalQuickviewComponent
  ],
  exports: [
    ModalQuickviewComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
