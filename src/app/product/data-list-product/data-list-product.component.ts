import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/Product';
import { ProductService } from 'src/app/service/product.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-data-list-product',
  templateUrl: './data-list-product.component.html',
  styleUrls: ['./data-list-product.component.scss']
})
export class DataListProductComponent implements OnInit {
  products: Product[];

  constructor(private productService: ProductService,
              private router: Router,
    ) { }

  ngOnInit(): void {
    this.productService.getAllProduct().subscribe(
      productService => {
        this.products = productService;
      }
    );
  }
  goToProductDetails(product: Product) {
    this.router.navigate(['/detail', product]);
  }

}
