import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProductState, selectAll } from './product.reducer';

export const productsFeatureSelector = createFeatureSelector<ProductState>('products');
/*Here, we are using the selectAll predefined selector to retrieve all entities as an array.*/
export const getAllProducts = createSelector(
  productsFeatureSelector,
  selectAll
);
/* the selector is used to check whether the courses have been already loaded into the state. */
export const areProductsLoaded = createSelector(
  productsFeatureSelector,
  state => state.productsLoaded
);
