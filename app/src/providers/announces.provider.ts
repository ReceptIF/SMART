import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { GlobalConstants } from '../app/app.constants';
import 'rxjs/add/operator/map';

@Injectable()
export class AnnounceProvider {
  cachedAnnounces : any;
  headers : Headers;
  options : RequestOptions;

  constructor(private http: Http) {
    this.cachedAnnounces = this.getAnnounces();
    this.headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    this.options = new RequestOptions({ headers: this.headers });
  }

  getAnnounces() {
    if (this.cachedAnnounces) {
      return Promise.resolve(this.cachedAnnounces);
    }

    return new Promise(resolve => {
      this.http.get(GlobalConstants.urlServer + '/announces')
        .map(res => res.json())
        .subscribe(data => {
          this.cachedAnnounces = data;
          resolve(this.cachedAnnounces);
        });
    });
  }

  getAnnounce(announceId) {
    return new Promise(resolve => {
      this.http.get(GlobalConstants.urlServer + '/announce/' + announceId)
        .map(res => res.json())
        .subscribe(data => {resolve(data);});
    });
  }

  getAnnounceByUser(userId) {
    return new Promise(resolve => {
      this.http.get(GlobalConstants.urlServer + '/announce/by/' + userId)
        .map(res => res.json())
        .subscribe(data => {resolve(data);});
    });
  }

  postAnnounce(announce) {
    return new Promise(resolve => {
      this.http.post(GlobalConstants.urlServer + '/announce', announce)
        .map(res => res.json())
        .subscribe(data => {resolve(data);});
    });
  }

  putAnnounce(announce) {
    return new Promise(resolve => {
      this.http.put(GlobalConstants.urlServer + '/announce', announce)
        .map(res => res.json())
        .subscribe(data => {resolve(data);});
    });
  }

  deleteAnnounce(announceId) {
    return new Promise(resolve => {
      this.http.delete(GlobalConstants.urlServer + '/announce/' + announceId)
        .map(res => res.json())
        .subscribe(data => {resolve(data);});
    });
  }

}

