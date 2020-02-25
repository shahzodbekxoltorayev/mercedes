import { Component, OnInit } from '@angular/core';
import { BasketService } from 'src/app/shared/service/basketService';
import { ProductService } from 'src/app/shared/service/productsService';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {

  products = [];
  quantity = [];
  number: any;
  general_sum: any;
  constructor(
    private basketService: BasketService,
    private productService: ProductService
    ) {
    this.getProducts();
  }

  getProducts() {
    this.number = this.basketService.products.length;
    for (let i = 0; i <= this.basketService.products.length - 1; i++) {
      this.quantity[i] = [];
    }                           //    2 o'lchovli massiv e'lin qilish

    console.log(this.basketService.products.length);

    for ( let i = 0; i <= this.basketService.products.length - 1; i++) {
      this.productService.getProduct(this.basketService.products[i]).subscribe( res => {
        this.products[i] = res.json();
        // this.products.push(res.json());
        for (let q = 0; q <= this.products[i].quantity; q++) {
          this.quantity[i][q] = q;
        }
        // this.products.push(res.json());

      });
    }
        console.log(this.quantity);
  }

  select(rate, price) {
    const money = rate * price;
    this.basketService.temporary = money;
    this.basketService.general_sum = this.basketService.general_sum + this.basketService.temporary;
    this.general_sum = this.basketService.general_sum ;
  }

  ngOnInit() {
  }

}
