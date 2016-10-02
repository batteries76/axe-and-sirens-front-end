import { Component, OnInit } from '@angular/core';

import { Router }            from '@angular/router';

import { Product }           from './product';
import { ProductService }    from './product.service';

@Component({
  selector: 'my-dashboard',
  templateUrl: 'app/dashboard.component.html',
  styleUrls: [ 'app/dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {

  products: Product[] = [];
//  prods: <Product[]>;

  constructor(
    private router: Router,
    private productService: ProductService
  ) { }

  ngOnInit(): void {
//    debugger;
    this.productService.getProducts()
      .then(productsResponseData => {
        this.products = productsResponseData;
        console.log(this.products)
      });

  }

  gotoDetail(product: Product): void {
    let link = ['/detail', product.id];
    this.router.navigate(link)
  }
}
