import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import {url} from '../../url/url';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: Http) { }

  url = url.url;

  postLogin(body) {
    return this.http.post(this.url + '/api/users/sign', body)
  }

  get() {
    return this.http.get(this.url + '/api/users/verifyUser/' + localStorage.getItem('token'));
  }


  getPerson() {
    return this.http.get(this.url + '/api/person/verifyPerson/' + localStorage.getItem('token'));
  }



}
