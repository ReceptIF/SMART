import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { GlobalConstants } from '../app.constants';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthentificationProvider {

    headers : Headers;
    options : RequestOptions;

    constructor(private http: Http) {
        this.headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        this.options = new RequestOptions({ headers: this.headers });
    }

    loginAdmin(credentials) {
        return new Promise(resolve => {
            this.http.post(GlobalConstants.urlServer + '/login', credentials)
                .map(res => res.json())
                .subscribe(data => resolve(data));
        });
    }

}

