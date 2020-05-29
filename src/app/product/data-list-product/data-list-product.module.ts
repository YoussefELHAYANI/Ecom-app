import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataListProductComponent } from './data-list-product.component';
import {DataViewModule} from 'primeng/dataview';


@NgModule({
  declarations: [DataListProductComponent],
  imports: [
    CommonModule,
    DataViewModule,
  ],
  exports: [DataListProductComponent]
})
export class DataListProductModule { }
