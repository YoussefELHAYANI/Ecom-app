import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { Product } from 'src/app/model/Product';
import {loadProducts, productsLoaded, productActionTypes} from 'src/app/product/data-list-product/store/product.action';

export interface ProductState extends EntityState<Product> {
  productsLoaded: boolean;
}
/*The below code snippet creates an Entity Adapter that provides the helper functions.*/
export const adapter: EntityAdapter<Product> = createEntityAdapter<Product>();

export const initialState = adapter.getInitialState({
  productsLoaded: false
});

export const ProductReducer = createReducer(
  initialState,
  on(productActionTypes.productsLoaded, (state, action) => {
    // tslint:disable-next-line: deprecation
    return adapter.addAll(
      action.products,
      {...state, productsLoaded: true}
    ); }),

  );
/*The following code line exports a couple of predefined selectors
 provided to us by the adapter. These selectors will be used by our custom selectors.*/
export const { selectAll, selectIds } = adapter.getSelectors();



