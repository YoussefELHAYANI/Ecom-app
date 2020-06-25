import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { ProductService } from 'src/app/service/product.service';
import { productActionTypes } from 'src/app/product/data-list-product/store/product.action';
import { concatMap, map, tap } from 'rxjs/operators';

@Injectable()
export class ProductsEffects {
  loadProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(productActionTypes.loadProducts),
      concatMap(() => this.productService.getAllProduct()), map(products => productActionTypes.productsLoaded({products})))
    );
  constructor(private productService: ProductService, private actions$: Actions) {}
}

