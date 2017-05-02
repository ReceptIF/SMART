import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { GlobalConstants } from '../app.constants';
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
      this.http.get(GlobalConstants.urlServer + '/announceTypes')
        .map(res => res.json())
        .subscribe(data => {
          this.cachedAnnounceTypes = data;
          resolve(this.cachedAnnounceTypes);
        });
    });
  }

  getAnnounceType(announceTypeId) {
    return new Promise(resolve => {
      this.http.get(GlobalConstants.urlServer + '/announceType/' + announceTypeId)
        .map(res => res.json())
        .subscribe(data => {resolve(data);});
    });
  }

  deleteAnnounceType(announceTypeId) {
    return new Promise(resolve => {
      this.http.delete(GlobalConstants.urlServer + '/announceType/' + announceTypeId)
          .map(res => res.json())
          .subscribe(data => {resolve(data);});
    });
  }


}

