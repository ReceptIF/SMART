import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { GlobalConstants } from '../app/app.constants';
import { Cookie } from 'ng2-cookies/ng2-cookies';
import 'rxjs/add/operator/map';

@Injectable()
export class AnnounceTypeProvider {

  constructor(private http: Http) {}

  getAnnounceTypes() {
    return new Promise(resolve => {
      this.http.get(GlobalConstants.urlServer + '/announceTypes' + '?token='+Cookie.get('ahCookie'))
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


}

