import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalQuickviewComponent } from './modal-quickview/modal-quickview.component';
import { ProductItemComponent } from './product-item/product-item.component';
import {FormsModule} from "@angular/forms";
import { CartSummaryComponent } from './cart-summary/cart-summary.component';
import { TableComponent } from './table/table.component';
import {RouterLink} from "@angular/router";
import { ChartComponent } from './chart/chart.component';
import {NgxEchartsDirective} from "ngx-echarts";



@NgModule({
  declarations: [
    ModalQuickviewComponent,
    ProductItemComponent,
    CartSummaryComponent,
    TableComponent,
    ChartComponent
  ],
  exports: [
    ModalQuickviewComponent,
    ProductItemComponent,
    CartSummaryComponent,
    TableComponent,
    ChartComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterLink,
    NgxEchartsDirective
  ]
})
export class SharedModule { }
