import { Component, OnInit } from '@angular/core';
import { BasketService } from 'src/app/shared/service/basketService';
import { ProductService } from 'src/app/shared/service/productsService';
import { ConditionalExpr } from '@angular/compiler';
import { UsersService } from 'src/app/shared/service/usersService';

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.css']
})
export class DeliveryComponent implements OnInit {

  products = [];
  delivery_text: any = 'Не выбрано';
  pay_type: any = 'Не выбрано';
  delivery = true;
  first_delivery = true;
  full_address: any;
  address = true;
  isUser = true;
  body: any = {};
  constructor(
    private basketService: BasketService,
    private productService: ProductService,
    private userService: UsersService
  ) {
    this.getProducts();
    this.verifyuser();
  }

  verifyuser() {
    this.userService.getVerify().subscribe( res => {
      this.body = res.json();
      if ( this.body.isUser ) {
        this.isUser = false;
      }
    });
  }
  getProducts() {
    const array = JSON.parse(localStorage.getItem('products'));

    for ( let i = 0; i <= array.length - 1; i++) {
      this.productService.getProduct(array[i]).subscribe( res => {
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

  select_delivery() {
    this.delivery = false;
    this.first_delivery = false;
    this.delivery_text = 'Доставка на дом или в офис';
    // this.full_address = 'Manzilni to`ldiring';
  }

  selected_delivery() {
    this.delivery = true;
    this.first_delivery = false;
    this.delivery_text = 'Самовывоз из Pick-up Point';
    this.full_address = 'Kompaniya manzili: Toshkent shaxar, Chilonzor tumani.'
  }

  click() {
    this.pay_type = 'Click';
  }
  payme() {
    this.pay_type = 'PayMe';
  }
  cash() {
    this.pay_type = 'Наличка';
  }

  confirm_address(province, region, street, number_home, floor, apartment) {
    this.full_address = province + ' ' + region + ' ' + street + ' ' + number_home + ' ' + floor + ' ' + apartment;
    this.address = false;
  }


  ngOnInit() {
  }

}
