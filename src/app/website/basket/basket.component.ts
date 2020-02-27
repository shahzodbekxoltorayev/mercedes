import { Component, OnInit } from '@angular/core';
import { BasketService } from 'src/app/shared/service/basketService';
import { ProductService } from 'src/app/shared/service/productsService';
import { UsersService } from 'src/app/shared/service/usersService';

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
  isUser = false;
  body: any = {};
  i: any;

  constructor(
    private basketService: BasketService,
    private productService: ProductService,
    private userService: UsersService
    ) {
    this.getProducts();
    this.verifyUser();
  }
  verifyUser() {
    this.userService.getVerify().subscribe( res => {
        this.body = res.json();
        if ( this.body.isUser) {
          this.isUser = true;
        }
    });
  }

  // getProducts() {
  //   this.number = this.basketService.products.length;
  //   for (let i = 0; i <= this.basketService.products.length - 1; i++) {
  //     this.quantity[i] = [];
  //   }                           //    2 o'lchovli massiv e'lin qilish

  //   console.log(this.basketService.products.length);

  //   for ( let i = 0; i <= this.basketService.products.length - 1; i++) {
  //     this.productService.getProduct(this.basketService.products[i]).subscribe( res => {
  //       this.products[i] = res.json();
  //       // this.products.push(res.json());
  //       for (let q = 0; q <= this.products[i].quantity; q++) {
  //         this.quantity[i][q] = q;
  //       }
  //       // this.products.push(res.json());

  //     });
  //   }
  //   console.log(this.quantity);
  // }


  getProducts() {
    const array = JSON.parse(localStorage.getItem('products'));
    console.log(array);

    this.number = array.length;
    for (let i = 0; i <= array.length - 1; i++) {
      this.quantity[i] = [];
    }                           //    2 o'lchovli massiv e'lin qilish

    // console.log(this.basketService.products.length);

    for ( let i = 0; i <= array.length - 1; i++) {
      this.productService.getProduct(array[i]).subscribe( res => {
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
    this.i = this.basketService.q;
    this.basketService.rates[this.i] = rate;
    localStorage.setItem('rate', JSON.stringify(this.basketService.rates));
    this.basketService.q++;
    const money = rate * price;
    this.basketService.temporary = money;
    this.basketService.general_sum = this.basketService.general_sum + this.basketService.temporary;
    this.general_sum = this.basketService.general_sum ;
  }

  ngOnInit() {
  }

}
