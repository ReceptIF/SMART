import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { GlobalConstants } from '../app.constants';
import { Cookie } from 'ng2-cookies/ng2-cookies';
import 'rxjs/add/operator/map';

@Injectable()
export class NotificationProvider {
  headers : Headers;
  options : RequestOptions;

  constructor(private http: Http) {
    this.headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    this.options = new RequestOptions({ headers: this.headers });
  }

  getNotifications() {
    return new Promise(resolve => {
      this.http.get(GlobalConstants.urlServer + '/notifications' + '?token='+Cookie.get('ahCookie'))
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
        });
    });
  }

  getNotificationById(notificationId) {
    return new Promise(resolve => {
      this.http.get(GlobalConstants.urlServer + '/notification/' + notificationId + '?token='+Cookie.get('ahCookie'))
        .map(res => res.json())
        .subscribe(data => {resolve(data);});
    });
  }

  getNotificationsByUser(userId) {
    return new Promise(resolve => {
      this.http.get(GlobalConstants.urlServer + '/notifications/user/' + userId + '?token='+Cookie.get('ahCookie'))
        .map(res => res.json())
        .subscribe(data => {resolve(data);});
    });
  }

  getNotificationsByAnnounce(announceId) {
    return new Promise(resolve => {
      this.http.get(GlobalConstants.urlServer + '/notifications/announce/' + announceId + '/accepted' + '?token='+Cookie.get('ahCookie'))
        .map(res => res.json())
        .subscribe(data => {resolve(data);});
    });
  }

  deleteNotification(notificationId) {
    return new Promise(resolve => {
      this.http.delete(GlobalConstants.urlServer + '/notification/' + notificationId + '?token='+Cookie.get('ahCookie'))
        .map(res => res.json())
        .subscribe(data => {resolve(data);});
    });
  }

}

