import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { GlobalConstants } from '../app.constants';
import { Cookie } from 'ng2-cookies/ng2-cookies';
import 'rxjs/add/operator/map';

@Injectable()
export class CommentProvider {
  headers : Headers;
  options : RequestOptions;

  constructor(private http: Http) {
    this.headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    this.options = new RequestOptions({ headers: this.headers });
  }

  getComments() {
    return new Promise(resolve => {
      this.http.get(GlobalConstants.urlServer + '/comments' + '?token='+Cookie.get('ahCookie'))
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
        });
    });
  }

  getCommentById(commentId) {
    return new Promise(resolve => {
      this.http.get(GlobalConstants.urlServer + '/comment/' + commentId + '?token='+Cookie.get('ahCookie'))
        .map(res => res.json())
        .subscribe(data => {resolve(data);});
    });
  }

  getCommentByAuthor(authorId) {
    return new Promise(resolve => {
      this.http.get(GlobalConstants.urlServer + '/comments/author/' + authorId + '?token='+Cookie.get('ahCookie'))
        .map(res => res.json())
        .subscribe(data => {resolve(data);});
    });
  }

  getCommentByTarget(targetId) {
    return new Promise(resolve => {
      this.http.get(GlobalConstants.urlServer + '/comments/target/' + targetId + '?token='+Cookie.get('ahCookie'))
        .map(res => res.json())
        .subscribe(data => {resolve(data);});
    });
  }

  postComment(comment) {
    return new Promise(resolve => {
      this.http.post(GlobalConstants.urlServer + '/comment' + '?token='+Cookie.get('ahCookie'), comment)
        .map(res => res.json())
        .subscribe(data => {resolve(data);});
    });
  }

  putComment(comment) {
    return new Promise(resolve => {
      this.http.put(GlobalConstants.urlServer + '/comment' + '?token='+Cookie.get('ahCookie'), comment)
        .map(res => res.json())
        .subscribe(data => resolve(data));
    });
  }

  deleteComment(commentId) {
    return new Promise(resolve => {
      this.http.delete(GlobalConstants.urlServer + '/comment/' + commentId + '?token='+Cookie.get('ahCookie'))
        .map(res => res.json())
        .subscribe(data => {resolve(data);});
    });
  }

}

