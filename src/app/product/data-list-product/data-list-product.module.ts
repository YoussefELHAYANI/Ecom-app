import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataListProductComponent } from './data-list-product.component';
import {DataViewModule} from 'primeng/dataview';
import {MatGridListModule} from '@angular/material/grid-list';
import { ProductService } from 'src/app/service/product.service';
import { StoreModule } from '@ngrx/store';
import { ProductReducer } from './store/product.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ProductsEffects } from './store/product.effects';

@NgModule({
  declarations: [DataListProductComponent],
  imports: [
    CommonModule,
    DataViewModule,
    MatGridListModule,
    StoreModule.forFeature('products', ProductReducer),
    EffectsModule.forFeature([ProductsEffects])
  ],
  providers: [ProductService],
  exports: [DataListProductComponent],
})
export class DataListProductModule { }
