import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { GlobalConstants } from '../app/app.constants';
import { Cookie } from 'ng2-cookies/ng2-cookies';
import 'rxjs/add/operator/map';

@Injectable()
export class AnnounceProvider {
  headers : Headers;
  options : RequestOptions;

  constructor(private http: Http) {
    this.headers = new Headers({
      'Content-Type': 'application/x-www-form-urlencoded'
    });
    this.options = new RequestOptions({ headers: this.headers });
  }

  getAnnounces() {
    return new Promise(resolve => {
      this.http.get(GlobalConstants.urlServer + '/announces?token='+Cookie.get('ahCookie'))
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
        });
    });
  }

  getOpenAnnounces() {
    return new Promise(resolve => {
      this.http.get(GlobalConstants.urlServer + '/announces/open?token='+Cookie.get('ahCookie'))
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
        });
    });
  }

  getAnnounce(announceId) {
    return new Promise(resolve => {
      this.http.get(GlobalConstants.urlServer + '/announce/' + announceId + '?token='+Cookie.get('ahCookie'))
        .map(res => res.json())
        .subscribe(data => {resolve(data);});
    });
  }

  getAnnounceByUser(userId) {
    return new Promise(resolve => {
      this.http.get(GlobalConstants.urlServer + '/announces/by/' + userId + '?token='+Cookie.get('ahCookie'))
        .map(res => res.json())
        .subscribe(data => {resolve(data);});
    });
  }

  postAnnounce(announce) {
    return new Promise(resolve => {
      this.http.post(GlobalConstants.urlServer + '/announce?token='+Cookie.get('ahCookie'), announce)
        .map(res => res.json())
        .subscribe(data => {resolve(data);});
    });
  }

  searchAnnounces(search) {
    return new Promise(resolve => {
      this.http.post(GlobalConstants.urlServer + '/announces/search?token='+Cookie.get('ahCookie'), search)
        .map(res => res.json())
        .subscribe(data => {resolve(data);});
    });
  }

  putAnnounce(announce) {
    return new Promise(resolve => {
      this.http.put(GlobalConstants.urlServer + '/announce?token='+Cookie.get('ahCookie'), announce)
        .map(res => res.json())
        .subscribe(data => {resolve(data);});
    });
  }

  deleteAnnounce(announceId) {
    return new Promise(resolve => {
      this.http.delete(GlobalConstants.urlServer + '/announce/' + announceId + '?token='+Cookie.get('ahCookie'))
        .map(res => res.json())
        .subscribe(data => {resolve(data);});
    });
  }

}

