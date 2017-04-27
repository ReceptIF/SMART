import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { GlobalConstants } from '../app/app.constants';
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
      this.http.get(GlobalConstants.urlServer + '/notifications')
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
        });
    });
  }

  getNotificationById(notificationId) {
    return new Promise(resolve => {
      this.http.get(GlobalConstants.urlServer + '/notification/' + notificationId)
        .map(res => res.json())
        .subscribe(data => {resolve(data);});
    });
  }

  getNotificationsByUser(userId) {
    return new Promise(resolve => {
      this.http.get(GlobalConstants.urlServer + '/notifications/user/' + userId)
        .map(res => res.json())
        .subscribe(data => {resolve(data);});
    });
  }

  getNotificationsByAnnounce(announceId) {
    return new Promise(resolve => {
      this.http.get(GlobalConstants.urlServer + '/notifications/announce/' + announceId + '/accepted')
        .map(res => res.json())
        .subscribe(data => {resolve(data);});
    });
  }

  deleteNotification(notificationId) {
    return new Promise(resolve => {
      this.http.delete(GlobalConstants.urlServer + '/notification/' + notificationId)
        .map(res => res.json())
        .subscribe(data => {resolve(data);});
    });
  }

}
