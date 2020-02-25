import { Component, OnInit } from '@angular/core';
import { BasketService } from 'src/app/shared/service/basketService';
import { ProductService } from 'src/app/shared/service/productsService';

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.css']
})
export class DeliveryComponent implements OnInit {

  products = [];
  constructor(
    private basketService: BasketService,
    private productService: ProductService
  ) {
    this.getProducts();
  }
  getProducts() {

    for ( let i = 0; i <= this.basketService.products.length - 1; i++) {
      this.productService.getProduct(this.basketService.products[i]).subscribe( res => {
        this.products[i] = res.json();
        // this.products.push(res.json());
        // for (let q = 0; q <= this.products[i].quantity; q++) {
        //   this.quantity[i][q] = q;
        // }
        // this.products.push(res.json());

      });
    }
    console.log(this.products);
  }

  ngOnInit() {
  }

}
