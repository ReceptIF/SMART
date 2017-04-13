import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { GlobalConstants } from '../app/app.constants';
import 'rxjs/add/operator/map';

@Injectable()
export class AnnounceProvider {
  cachedAnnounces : any;

  constructor(private http: Http) {
    this.cachedAnnounces = this.getAnnounces();
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
  
  postAnnounce(announce) {
    
    var ret;
  
    this.http.post(GlobalConstants.urlServer + '/announce',announce)
      .map(res => res.json())
      .subscribe(
          data => ret = data
    );
    
  }
  
}

