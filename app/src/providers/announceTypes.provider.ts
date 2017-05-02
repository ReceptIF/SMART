import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { GlobalConstants } from '../app/app.constants';
import { Cookie } from 'ng2-cookies/ng2-cookies';
import 'rxjs/add/operator/map';

@Injectable()
export class AnnounceTypeProvider {
  cachedAnnounceTypes : any;

  constructor(private http: Http) {
    this.cachedAnnounceTypes = this.getAnnounceTypes();
  }

  getAnnounceTypes() {
    if (this.cachedAnnounceTypes) {
      return Promise.resolve(this.cachedAnnounceTypes);
    }
	
    return new Promise(resolve => {
      this.http.get(GlobalConstants.urlServer + '/announceTypes' + '?token='+Cookie.get('ahCookie'))
        .map(res => res.json())
        .subscribe(data => {
          this.cachedAnnounceTypes = data;
          resolve(this.cachedAnnounceTypes);
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

