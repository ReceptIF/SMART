import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { GlobalConstants } from '../app.constants';
import 'rxjs/add/operator/map';

@Injectable()
export class CityProvider {
  cachedCities : any;
  headers : Headers;
  options : RequestOptions;

  constructor(private http: Http) {
    this.cachedCities = this.getCities();
    this.headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    this.options = new RequestOptions({ headers: this.headers });
  }

  getCities() {
    if (this.cachedCities) {
      return Promise.resolve(this.cachedCities);
    }

    return new Promise(resolve => {
      this.http.get(GlobalConstants.urlServer + '/cities')
        .map(res => res.json())
        .subscribe(data => {
          this.cachedCities = data;
          resolve(this.cachedCities);
        });
    });
  }

  getCity(cityId) {
    return new Promise(resolve => {
      this.http.get(GlobalConstants.urlServer + '/city/' + cityId)
        .map(res => res.json())
        .subscribe(data => {resolve(data);});
    });
  }

  postCity(city) {
    return new Promise(resolve => {
      this.http.post(GlobalConstants.urlServer + '/city', city)
        .map(res => res.json())
        .subscribe(data => {resolve(data);});
    });
  }

  putCity(city) {
    return new Promise(resolve => {
      this.http.put(GlobalConstants.urlServer + '/city', city)
        .map(res => res.json())
        .subscribe(data => {resolve(data);});
    });
  }

  deleteCity(cityId) {
    return new Promise(resolve => {
      this.http.delete(GlobalConstants.urlServer + '/city/' + cityId)
        .map(res => res.json())
        .subscribe(data => {resolve(data);});
    });
  }

}

