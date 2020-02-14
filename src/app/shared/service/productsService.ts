import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import {url} from '../../url/url';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: Http) { }

  url = url.url;
  api = this.url + '/api/products/';

  getAll() {
    return this.http.get(  this.api + 'getall');
  }

  delete(id) {
    return this.http.delete(this.api + id + '/' + localStorage.getItem('token'));
  }

  post(
      name_uz: string,
      name_ru: string,
      description_uz: string,
      description_ru: string,
      category_id: string,
      image_original_name: File,
      quantity: string,
      brand: string,
      model: string,
      configuration: string,
      price: string,
      sale: string
  ) {
    const Product = new FormData();
    Product.append('name_uz', name_uz);
    Product.append('name_ru', name_ru);
    Product.append('description_uz', description_uz);
    Product.append('description_ru', description_ru);
    Product.append('category_id', category_id);
    Product.append('image', image_original_name);
    Product.append('quantity', quantity);
    Product.append('brand', brand);
    Product.append('model', model);
    Product.append('configuration', configuration);
    Product.append('configuration', configuration);
    Product.append('price', price);
    Product.append('sale', sale);

    console.log(name_uz);
    return this.http.post(this.api + localStorage.getItem('token'), Product);
  }


  get() {
    return this.http.get(this.url + '/api/users/verifyUser/' + localStorage.getItem('token'));
  }


  getPerson() {
    return this.http.get(this.url + '/api/person/verifyPerson/' + localStorage.getItem('token'));
  }



}
