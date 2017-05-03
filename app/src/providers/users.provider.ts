import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { GlobalConstants } from '../app/app.constants';
import { Cookie } from 'ng2-cookies/ng2-cookies';
import 'rxjs/add/operator/map';

@Injectable()
export class UserProvider {

  constructor(private http: Http) {}

  login(idents) {
    return new Promise(resolve => {
      this.http.post(GlobalConstants.urlServer + '/login', idents)
        .map(res => res.json())
        .subscribe(data => resolve(data));
    });
  }

  getUsers() {
    return new Promise(resolve => {
      this.http.get(GlobalConstants.urlServer + '/users' + '?token='+Cookie.get('ahCookie'))
        .map(res => res.json())
        .subscribe(data => resolve(data));
    });
  }

  getUser(userId) {
    return new Promise(resolve => {
      this.http.get(GlobalConstants.urlServer + '/user/' + userId + '?token='+Cookie.get('ahCookie'))
        .map(res => res.json())
        .subscribe(data => resolve(data));
    });
  }

  getConnectedUser() {
    return new Promise(resolve => {
      this.http.get(GlobalConstants.urlServer + '/user/current?token='+Cookie.get('ahCookie'))
        .map(res => res.json())
        .subscribe(data => resolve(data));
    });
  }

  postUser(user) {
    return new Promise(resolve => {
      this.http.post(GlobalConstants.urlServer + '/user' + '?token='+Cookie.get('ahCookie'), user)
        .map(res => res.json())
        .subscribe(data => resolve(data));
    });
  }

  putUser(user) {
    return new Promise(resolve => {
      this.http.put(GlobalConstants.urlServer + '/user' + '?token='+Cookie.get('ahCookie'), user)
        .map(res => res.json())
        .subscribe(data => resolve(data));
    });
  }

  deleteUser(userId) {
    return new Promise(resolve => {
      this.http.delete(GlobalConstants.urlServer + '/user/' + userId + '?token='+Cookie.get('ahCookie'))
        .map(res => res.json())
        .subscribe(data => resolve(data));
    });
  }

}

