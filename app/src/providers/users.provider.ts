import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { GlobalConstants } from '../app/app.constants';
import 'rxjs/add/operator/map';

@Injectable()
export class UserProvider {

  constructor(private http: Http) {
  
  }

  getUser(userId) {
    
    var ret;
    
    this.http.get(GlobalConstants.urlServer + '/user/' + userId)
        .map(res => res.json())
        .subscribe(data => ret = data);
        
    return ret;
  }
  
}
