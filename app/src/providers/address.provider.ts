import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { GlobalConstants } from '../app/app.constants';
import 'rxjs/add/operator/map';

@Injectable()
export class AddressProvider {
  cachedAddresses : any;
  headers : Headers;
  options : RequestOptions;

  constructor(private http: Http) {
    this.cachedAddresses = this.getAddresses();
    this.headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    this.options = new RequestOptions({ headers: this.headers });
  }

  getAddresses() {
    if (this.cachedAddresses) {
      return Promise.resolve(this.cachedAddresses);
    }

    return new Promise(resolve => {
      this.http.get(GlobalConstants.urlServer + '/addresses')
        .map(res => res.json())
        .subscribe(data => {
          this.cachedAddresses = data;
          resolve(this.cachedAddresses);
        });
    });
  }

  getAddress(addressId) {
    return new Promise(resolve => {
      this.http.get(GlobalConstants.urlServer + '/address/' + addressId)
        .map(res => res.json())
        .subscribe(data => {resolve(data);});
    });
  }

  getAddressesByUser(userId) {
    return new Promise(resolve => {
      this.http.get(GlobalConstants.urlServer + '/addresses/user/' + userId)
        .map(res => res.json())
        .subscribe(data => {resolve(data);});
    });
  }

  postAddress(address) {
    return new Promise(resolve => {
      this.http.post(GlobalConstants.urlServer + '/address', address)
        .map(res => res.json())
        .subscribe(data => {resolve(data);});
    });
  }

  putAddress(address) {
    return new Promise(resolve => {
      this.http.put(GlobalConstants.urlServer + '/address', address)
        .map(res => res.json())
        .subscribe(data => {resolve(data);});
    });
  }

  deleteAddress(addressId) {
    return new Promise(resolve => {
      this.http.delete(GlobalConstants.urlServer + '/address/' + addressId)
        .map(res => res.json())
        .subscribe(data => {resolve(data);});
    });
  }

}

