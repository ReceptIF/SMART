import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { GlobalConstants } from '../app/app.constants';
import 'rxjs/add/operator/map';

@Injectable()
export class UserProvider {

  constructor(private http: Http) {

  }

  getUsers() {
    return new Promise(resolve => {
      this.http.get(GlobalConstants.urlServer + '/users')
        .map(res => res.json())
        .subscribe(data => resolve(data));
    });
  }

  getUser(userId) {
    return new Promise(resolve => {
      this.http.get(GlobalConstants.urlServer + '/user/' + userId)
        .map(res => res.json())
        .subscribe(data => resolve(data));
    });
  }

  postUser(user) {
    return new Promise(resolve => {
      this.http.post(GlobalConstants.urlServer + '/user', user)
        .map(res => res.json())
        .subscribe(data => resolve(data));
    });
  }

  putUser(user) {
    return new Promise(resolve => {
      this.http.put(GlobalConstants.urlServer + '/user', user)
        .map(res => res.json())
        .subscribe(data => resolve(data));
    });
  }

  deleteUser(userId) {
    return new Promise(resolve => {
      this.http.delete(GlobalConstants.urlServer + '/user/' + userId)
        .map(res => res.json())
        .subscribe(data => resolve(data));
    });
  }

}

