import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { GlobalConstants } from '../app/app.constants';
import { Cookie } from 'ng2-cookies/ng2-cookies';
import 'rxjs/add/operator/map';

@Injectable()
export class CityProvider {
  headers : Headers;
  options : RequestOptions;

  constructor(private http: Http) {
    this.headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    this.options = new RequestOptions({ headers: this.headers });
  }

  getCities() {
    return new Promise(resolve => {
      this.http.get(GlobalConstants.urlServer + '/cities' + '?token='+Cookie.get('ahCookie'))
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
        });
    });
  }

  getCity(cityId) {
    return new Promise(resolve => {
      this.http.get(GlobalConstants.urlServer + '/city/' + cityId + '?token='+Cookie.get('ahCookie'))
        .map(res => res.json())
        .subscribe(data => {resolve(data);});
    });
  }

  postCity(city) {
    return new Promise(resolve => {
      this.http.post(GlobalConstants.urlServer + '/city' + '?token='+Cookie.get('ahCookie'), city)
        .map(res => res.json())
        .subscribe(data => {resolve(data);});
    });
  }

  putCity(city) {
    return new Promise(resolve => {
      this.http.put(GlobalConstants.urlServer + '/city' + '?token='+Cookie.get('ahCookie'), city)
        .map(res => res.json())
        .subscribe(data => {resolve(data);});
    });
  }

  deleteCity(cityId) {
    return new Promise(resolve => {
      this.http.delete(GlobalConstants.urlServer + '/city/' + cityId + '?token='+Cookie.get('ahCookie'))
        .map(res => res.json())
        .subscribe(data => {resolve(data);});
    });
  }

}

