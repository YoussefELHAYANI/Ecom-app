import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../model/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }
  getAllProduct(): Observable<Product[]>{
    return  of([
      {id: 1 },
      {id: 2 },
      {id: 256 },
      {id: 2 },
      {id: 2 },
      {id: 25 },
      {id: 4 },
      {id: 3 }
    ]);
  }
}
