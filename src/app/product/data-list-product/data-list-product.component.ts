import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/Product';
import { ProductService } from 'src/app/service/product.service';
@Component({
  selector: 'app-data-list-product',
  templateUrl: './data-list-product.component.html',
  styleUrls: ['./data-list-product.component.scss']
})
export class DataListProductComponent implements OnInit {
  products: Product[];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getAllProduct().subscribe(
      productService => {
        this.products = productService;
      }
    );
  }

}
