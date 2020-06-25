import { Product } from 'src/app/model/Product';
import { createAction, props } from '@ngrx/store';

export const loadProducts = createAction(
  '[Products List] Load Products via Service',
);

export const productsLoaded = createAction(
  '[Products Effect] Products Loaded Successfully',
  props<{products: Product[]}>()
);

export const productActionTypes = {
  loadProducts,
  productsLoaded
};

