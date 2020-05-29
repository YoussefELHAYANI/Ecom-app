import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/Product';

@Component({
  selector: 'app-data-list-product',
  templateUrl: './data-list-product.component.html',
  styleUrls: ['./data-list-product.component.scss']
})
export class DataListProductComponent implements OnInit {
  products: Product[];

  constructor() { }

  ngOnInit(): void {
    this.products = [
      {id: 1 },
      {id: 2 }
    ];
  }

}
