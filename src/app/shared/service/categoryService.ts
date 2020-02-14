import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import {url} from '../../url/url';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: Http) { }

  url = url.url;
  api = this.url + '/api/category/';

  getAll() {
    return this.http.get(  this.api + 'getall');
  }

  delete(id) {
    return this.http.delete(this.api + id + '/' + localStorage.getItem('token'));
  }

  post(body) {
    return this.http.post(this.url + localStorage.getItem('token'), body)
  }

  getCategory(id) {
    return this.http.get(this.url + 'getCategory/' + id);
  }


  update(id, body) {
    return this.http.patch(this.url + 'updateCategory/' + id + '/' + localStorage.getItem('token'), body);
  }



}
