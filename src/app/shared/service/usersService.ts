import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { url } from '../../url/url';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: Http) { }

  url = url.url;
  api = this.url + '/api/users/';

  getAll() {
    return this.http.get(this.api);
  }

  delete(id) {
    return this.http.delete(this.api + id + '/' + localStorage.getItem('token'));
  }

  post(
    name_uz: string,
    name_ru: string
  ) {
    const body = {
      'name_uz': name_uz,
      'name_ru': name_ru
    };
    return this.http.post(this.api + localStorage.getItem('token'), body);
  }             // keyinroq

  getUser(id) {
    return this.http.get(this.api + id);
  }

  update(
    id: string,
    name_uz: string,
    name_ru: string
  ) {
    const body = {
      'name_uz': name_uz,
      'name_ru': name_ru
    };

    return this.http.patch(this.api + 'updateCategory/' + id + '/' + localStorage.getItem('token'), body);
  }



}
